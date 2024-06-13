import os
from hackathon.src.parser.sarif import parse_sarif_files
from hackathon.src.github.api import query_github, run_git_blame
from hackathon.src.llm.prompt import fix_vulnerability

# import levenshtein distance
from Levenshtein import distance as levenshtein

import pickle

MEM_LOCATION = '/home/nathan/Desktop/code-scanning-ai-hackathon/mem.pkl'
# backend initialization for streamlit
def init():
    if os.path.exists(MEM_LOCATION):
        # Open the pickle file and load the data into commits
        with open(MEM_LOCATION, 'rb') as file:
            commits = pickle.load(file)
        return commits
    commits = parse_sarif_files()
    
    for commit in commits:
        commit['commit_data'] = query_github(commit_sha = commit['hash'])
    run_git_blame(commits)
    for commit in commits:
        for vul in commit['all_vulnerabilities']:
            vul["commit_data"] = query_github(commit_sha = vul['blame']) 
    process_vulnerabilities(commits)
    
    with open(MEM_LOCATION, 'wb') as file:
        pickle.dump(commits, file)
    return commits


def process_vulnerabilities(commits):
    
    # sort by string date in yyyy-mm-dd format
    commits.sort(key=lambda x: x['date'])

    baseline = commits[0]
    i = 0
    for commit in commits:
        
        if i == 0:
            baseline = commit.copy()
            

            commit['introduced'] = []
            commit['old_vulnerabilities'] = []
            for vul in commit['all_vulnerabilities']:
                location = vul['locations'][0]
                file = location['file']
                line = location['line']
                if file in commit['commit_data']['files']:
                    file_details = parse_git_changes(commit['commit_data']['files'][file]['changes'])
                    if line in file_details['lines_added']:
                    # if line in commit['commit_data']['files'][file]['lines_added']:
                        
                        file_data = {'filepath': file, 'changes': commit['commit_data']['files'][file]['changes']}
                        file_data.update(file_details)

                        commit['introduced'].append(
                            {
                                'vulnerability': vul,
                                'file': file_data,
                                'commit_data': vul['commit_data']
                            }
                        )
                        # vul['commit_data'] 
                    else:
                        if file not in vul['commit_data']['files']:
                            all_files = list(vul['commit_data']['files'].keys())
                            all_files.sort(key=lambda x: levenshtein(file, x))
                            file = all_files[0]
                        file_details = parse_git_changes(vul['commit_data']['files'][file]['changes'])
                        file_data = {'filepath': file, 'changes': vul['commit_data']['files'][file]['changes']}
                        file_data.update(file_details)
                        commit['old_vulnerabilities'].append(
                            {
                                'vulnerability': vul,
                                'file': file_data,
                                'commit_data': vul['commit_data']

                            }
                        )
                else:
                    # find the key in vul['commit_data']['files'] that is most similar to file, with lowest levenshtein distance
                    if file not in vul['commit_data']['files']:
                        all_files = list(vul['commit_data']['files'].keys())
                        all_files.sort(key=lambda x: levenshtein(file, x))
                        file = all_files[0]

                    file_details = parse_git_changes(vul['commit_data']['files'][file]['changes'])
                    file_data = {'filepath': file, 'changes': vul['commit_data']['files'][file]['changes']}
                    file_data.update(file_details)
                    commit['old_vulnerabilities'].append(
                        {
                            'vulnerability': vul,
                            'file': file_data,
                            'commit_data': vul['commit_data']
                        }
                    )
        else:
            baseline_partialFingerprints = [x['partialFingerprints'] for x in baseline['all_vulnerabilities']]
            commit['unique_vulnerabilities'] = [x for x in commit['all_vulnerabilities'] if x['partialFingerprints'] not in baseline_partialFingerprints]

            commit['introduced'] = []
            commit['old_vulnerabilities'] = []

            for vul in commit['unique_vulnerabilities']:
                location = vul['locations'][0]
                file = location['file']
                line = location['line']
                if file in commit['commit_data']['files']:
                    file_details = parse_git_changes(commit['commit_data']['files'][file]['changes'])

                    if line in file_details['lines_added']:
                        file_data = {'filepath': file, 'changes': commit['commit_data']['files'][file]['changes']}
                        file_data.update(file_details)

                        commit['introduced'].append(
                            {
                                'vulnerability': vul,
                                'file': file_data,
                                'commit_data': vul['commit_data']

                            }
                        )
                    else:
                        if file not in vul['commit_data']['files']:
                            all_files = list(vul['commit_data']['files'].keys())
                            all_files.sort(key=lambda x: levenshtein(file, x))
                            file = all_files[0]
                        file_details = parse_git_changes(vul['commit_data']['files'][file]['changes'])
                        file_data = {'filepath': file, 'changes': vul['commit_data']['files'][file]['changes']}
                        file_data.update(file_details)
                        commit['old_vulnerabilities'].append(
                            {
                                'vulnerability': vul,
                                'file': file_data,
                                'commit_data': vul['commit_data']

                            }
                        )
                else:
                    if file not in vul['commit_data']['files']:
                        all_files = list(vul['commit_data']['files'].keys())
                        all_files.sort(key=lambda x: levenshtein(file, x))
                        file = all_files[0]
                    file_details = parse_git_changes(vul['commit_data']['files'][file]['changes'])
                    file_data = {'filepath': file, 'changes': vul['commit_data']['files'][file]['changes']}
                    file_data.update(file_details)
                    commit['old_vulnerabilities'].append(
                        {
                            'vulnerability': vul,
                            'file': file_data,
                            'commit_data': vul['commit_data']
                        }
                    )
            to_remove = []
            for intro_vul in commit['introduced']:
                for unique_vul in commit['unique_vulnerabilities']:
                    if intro_vul['vulnerability']['partialFingerprints'] == unique_vul['partialFingerprints']:
                        to_remove.append(unique_vul)
            
            for vul in to_remove:
                commit['unique_vulnerabilities'].remove(vul)
    
        
        i+=1
    
    pass

def parse_git_changes(files):
    if type(files) is str:
        changes = files
        single = True
        files = {'None': None}
    else:
        single = False
        changes = file['changes']
    
    for path, file in files.items():
        
        lines = changes.split('\n')
        blocks = []
        all_lines_added = []
        details = []
        if lines == ['']:
            return {
                'lines_added': all_lines_added,
                'blocks': blocks,
                'details': details
            }
        for line in lines:
            
            if line.startswith("@@"):
                detail = {
                    'color': 'grey',
                    'type': 'definition',
                    'content': line,
                    'del_line': None,
                    'add_line': None
                }
                blocks.append({})
                blocks[-1]['deletion_start'] = int(line.split('@@')[1].split('+')[0].split(',')[0].strip()[1:])
                blocks[-1]['addition_start'] = int(line.split('@@')[1].split('+')[-1].split(',')[0])
                blocks[-1]['deletion_curr'] = int(line.split('@@')[1].split('+')[0].split(',')[0].strip()[1:]) - 1
                blocks[-1]['addition_curr'] = int(line.split('@@')[1].split('+')[-1].split(',')[0]) - 1
                blocks[-1]['lines_added'] = []
                pass
            elif line.startswith("+"):
                
                blocks[-1]['addition_curr'] += 1
                blocks[-1]['lines_added'].append(blocks[-1]['addition_curr'])
                detail = {
                    'color': 'green',
                    'type': 'addition',
                    'content': line,
                    'del_line': None,
                    'add_line': blocks[-1]['addition_curr'],
                }
            elif line.startswith("-"):
                blocks[-1]['deletion_curr'] += 1
                detail = {
                    'color': 'red',
                    'type': 'deletion',
                    'content': line,
                    'del_line': blocks[-1]['deletion_curr'],
                    'add_line': None,
                }
            else:
                blocks[-1]['addition_curr'] += 1
                blocks[-1]['deletion_curr'] += 1
                detail = {
                    'color': 'black',
                    'type': 'code',
                    'content': line,
                    'del_line': blocks[-1]['deletion_curr'],
                    'add_line': blocks[-1]['addition_curr']
                }
            details.append(detail)
        for block in blocks:
            all_lines_added.extend(block['lines_added'])
        if single:
            return {
                'lines_added': all_lines_added,
                'blocks': blocks,
                'details': details
            }
        else:
            files[path]['lines_added'] = all_lines_added
            files[path]['blocks'] = blocks
            files[path]['details'] = details


if __name__ == "__main__":
    init()