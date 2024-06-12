import os
from hackathon.src.parser.sarif import parse_sarif_files
from hackathon.src.github.api import query_github


# backend initialization for streamlit
def init():
    commits = parse_sarif_files()

    for commit in commits:
        commit['data'] = query_github(commit_sha = commit['hash'])
    
    process_vulnerabilities(commits)
    return commits


def process_vulnerabilities(commits):
    
    # sort by string date in yyyy-mm-dd format
    commits.sort(key=lambda x: x['date'])

    baseline = commits[0]
    i = 0
    for commit in commits:
        parse_git_changes(commit['data']['files'])
        if i == 0:
            baseline = commit
        else:
            commit['unique_vulnerabilities'] = [x for x in commit['results'] if x not in baseline['results']]
            commit['introduced'] = []
            for vul in commit['unique_vulnerabilities']:
                for location in vul['locations']:
                    file = location['file']
                    line = location['line']
                    if file in commit['data']['files']:
                        if line in commit['data']['files'][file]['lines_added']:
                            commit['introduced'].append(
                                {
                                    'vulnerability': vul,
                                    'file': file
                                }
                            )
                        pass
                    pass
        i+=1
    
    pass

def parse_git_changes(files):
    for path, file in files.items():
        lines = file['changes'].split('\n')
        blocks = []
        all_lines_added = []
        details = []
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
        files[path]['lines_added'] = all_lines_added
        files[path]['blocks'] = blocks
        files[path]['details'] = details


if __name__ == "__main__":
    init()