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
            new_data = {key: data[key] for key in relevant_keys}
            new_data['hash'] = hashes[i]
            new_data['date'] = dates[i]
            sarifs.append(new_data)
        i += 1

    return sarifs
    






# hashes, sarif_runs = parse_sarif_files()
# parse_sarif_results(sarif_runs)
