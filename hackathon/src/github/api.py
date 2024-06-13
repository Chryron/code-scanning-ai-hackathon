import requests

def query_github(owner = 'tensorflow', repo = 'tensorflow', commit_sha = 'a632c89dd778'):
    url = f'https://api.github.com/repos/{owner}/{repo}/commits/{commit_sha}'
    response = requests.get(url)

    if response.status_code == 200:
        commit_data = response.json()
        relevant_commit_data = {}
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
        files[file['filename']]['changes'] = relevant_commit_data['files'][i]['patch']
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
        author_data[new_key] = relevant_commit_data['author'][old_key]
        committer_data[new_key] = relevant_commit_data['committer'][old_key]
    relevant_commit_data['author'] = author_data
    relevant_commit_data['author'].update(relevant_commit_data['commit']['author'])
    relevant_commit_data['committer'] = committer_data
    relevant_commit_data['committer'].update(relevant_commit_data['commit']['committer'])


    
# relevant_commit_data = query_github()
# compare_code(relevant_commit_data)
