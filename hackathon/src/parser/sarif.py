import json
import os


# create a loop that iterates through the ./challenges/resources/sarifs directory
# and parses each file (ending in .sarif) into a dictionary

def parse_sarif_files():
    sarif_files = os.listdir('./challenges/resources/codeql_scans/sarifs')
    sarif_files = [file for file in sarif_files if file.endswith('.sarif')]
    hashes = [file.split('-')[1] for file in sarif_files]
    sarif_files = [os.path.join('./challenges/resources/codeql_scans/sarifs', file) for file in sarif_files]

    sarif_dicts = {}
    i = 0 
    for file in sarif_files:
        with open(file, 'r') as f:
            sarif_dicts[hashes[i]] = json.load(f)['runs'][0]
        i += 1

    return sarif_dicts
    

def parse_sarif_results(sarif_runs):
    sarif_vulnerabilities = {}
    for hash, run in sarif_runs.items():
        sarif_vulnerabilities[hash] = run['results']
    return sarif_vulnerabilities

sarif_runs = parse_sarif_files()
parse_sarif_results(sarif_runs)