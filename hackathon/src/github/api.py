import requests
import os
import subprocess
from dotenv import load_dotenv
import tempfile
import shutil

OLD_REPO_DIR = os.getenv('REPO_DIR')
load_dotenv()
API_KEY = os.getenv('GITHUB_API_KEY')
REPO_DIR = os.getenv('REPO_DIR') if os.getenv('REPO_DIR') else OLD_REPO_DIR

def query_github(owner = 'tensorflow', repo = 'tensorflow', commit_sha = 'a632c89dd778'):
    url = f'https://api.github.com/repos/{owner}/{repo}/commits/{commit_sha}'
    if API_KEY is None or API_KEY == '' or API_KEY == 'YOUR-API-KEY-HERE':
        print('WARNING: No GitHub API Key found. Attempting to query GitHub without authentication.')
        response = requests.get(url, headers=headers)
    else:
        headers = {
            'Authorization': f'Bearer {API_KEY}',
            'X-GitHub-Api-Version': '2022-11-28',
            'Accept': 'application/vnd.github.v3+json'
        }
        response = requests.get(url, headers=headers)

    if response.status_code == 200:
        commit_data = response.json()
        relevant_commit_data = {}
        relevant_commit_data['sha'] = commit_data['sha']

        relevant_commit_data['tree'] = commit_data['commit']['tree']
        relevant_commit_data['author'] = commit_data['author']
        relevant_commit_data['committer'] = commit_data['committer']
        relevant_commit_data['message'] = commit_data['commit']['message']
        relevant_commit_data['url'] = commit_data['html_url']
        relevant_commit_data['files'] = commit_data['files']
        relevant_commit_data['commit'] = commit_data['commit']
    else:
        print(f'Error: {response.status_code}')
    
    compare_code(relevant_commit_data)
    parse_authors(relevant_commit_data)
    return relevant_commit_data


def compare_code(relevant_commit_data):
    files, i = {}, 0
    for file in relevant_commit_data['files']:
        files[file['filename']] = {}
        files[file['filename']]['changes'] = relevant_commit_data['files'][i].get('patch', '')
        i += 1

    relevant_commit_data['files'] = files


def parse_authors(relevant_commit_data):
    relevant_keys = {
        'login': 'username',
        'html_url': 'url',
        'avatar_url': 'avatar'
    }
    committer_data = {}
    author_data = {}
    for old_key, new_key in relevant_keys.items():
        if relevant_commit_data['author'] is None: relevant_commit_data['author'] = {}
        if relevant_commit_data['committer'] is None: relevant_commit_data['committer'] = {}
        author_data[new_key] = relevant_commit_data['author'].get(old_key, {})
        committer_data[new_key] = relevant_commit_data['committer'].get(old_key, {})
    relevant_commit_data['author'] = author_data
    relevant_commit_data['author'].update(relevant_commit_data['commit']['author'])
    relevant_commit_data['committer'] = committer_data
    relevant_commit_data['committer'].update(relevant_commit_data['commit']['committer'])


def run_git_blame(commits, owner = 'tensorflow', repo = 'tensorflow'):
    # Create a temporary directory
    if REPO_DIR is not None and REPO_DIR != '':
        temp_dir = REPO_DIR
    else:
        temp_dir = tempfile.mkdtemp()
        # set env variable REPO_DIR
        os.environ['REPO_DIR'] = temp_dir
    # temp_dir = '/tmp/tmpm7pcpzge'
        repo_url = f'https://github.com/{owner}/{repo}.git'
        try:
        # Clone the repository into the temporary directory
            clone_cmd = ['git', 'clone', repo_url, temp_dir]
            subprocess.check_call(clone_cmd)
        except subprocess.CalledProcessError as e:
            print(f"An error occurred while running Git commands: {e}")
            shutil.rmtree(temp_dir)
            return None
        
    try:
        # Change to the cloned repository directory
        os.chdir(temp_dir)
        for commit in commits:
            commit_sha = commit['commit_data']['sha']

            # Checkout the specific commit
            checkout_cmd = ['git', 'checkout', commit_sha]
            subprocess.check_call(checkout_cmd)

            for vul in commit['all_vulnerabilities']:
                location = vul['locations'][0]
                filepath = location['file']
                line_number = location['line']
                

                # Run git blame on the specific file and line
                blame_cmd = ['git', 'blame', '-L', f'{line_number},{line_number}', filepath]
                blame_output = subprocess.check_output(blame_cmd).decode('utf-8')
                vul['blame'] = blame_output.split()[0]

    except subprocess.CalledProcessError as e:
        print(f"An error occurred while running Git commands: {e}")
        shutil.rmtree(temp_dir)
        raise ValueError('Git Repo has been wiped and will be cloned again')
        


