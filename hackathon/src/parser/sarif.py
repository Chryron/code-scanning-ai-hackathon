import json
import os

DATA_DIR = './hackathon/data'
# create a loop that iterates through the ./challenges/resources/sarifs directory
# and parses each file (ending in .sarif) into a dictionary

def parse_sarif_files():
    sarif_files = os.listdir(DATA_DIR)
    sarif_files = [file for file in sarif_files if file.endswith('.sarif')]
    hashes = [file.split('-')[1] for file in sarif_files]
    dates = ['-'.join(file.split('-')[2:])[:-6] for file in sarif_files]
    sarif_files = [os.path.join(DATA_DIR, file) for file in sarif_files]

    sarifs = []
    i = 0 
    relevant_keys = ['artifacts', 'results', 'properties']
    for file in sarif_files:
        with open(file, 'r') as f:
            data = json.load(f)['runs'][0]

            get_severity(data)
            
            new_data = {key: data[key] for key in relevant_keys}
            new_data['hash'] = hashes[i]
            new_data['date'] = dates[i]
            get_stats(new_data)
            parse_results(new_data)
            sarifs.append(new_data)
        i += 1

    return sarifs
    
def get_severity(data):
    relevant_vuls = data['results']
    vul_dict = {}
    all_vuls = data['tool']['driver']['rules']
    for vul in all_vuls:
        vul_dict[vul['id']] = vul['properties']
    for vul in relevant_vuls:
        vul['details'] = vul_dict[vul['ruleId']]
    pass
def parse_results(sarif):
    for vul in sarif['results']:
        locations = vul['locations']
        loc = []
        for location in locations:
            new_loc = {}
            new_loc['file'] = location['physicalLocation']['artifactLocation']['uri']
            new_loc['line'] = location['physicalLocation']['region']['startLine']
            loc.append(new_loc)
        vul['locations'] = loc

def get_stats(data):
    total_security_severity = 0
    total_errors = 0
    total_warnings = 0
    for bug in data['results']:
        severity = bug['details']['problem.severity']
        if severity == 'error': total_errors += 1
        elif severity == 'warning': total_warnings += 1
        total_security_severity += float(bug['details']['security-severity'])
    data['stats'] = {
        'total_security_severity': total_security_severity,
        'total_errors': total_errors,
        'total_warnings': total_warnings
    }




sarif_runs = parse_sarif_files()
# parse_sarif_results(sarif_runs)
