import json
import os

DATA_DIR = './hackathon/data'
# create a loop that iterates through the ./challenges/resources/sarifs directory
# and parses each file (ending in .sarif) into a dictionary

def parse_sarif_files():
    """
    Parses the SARIF files in the specified directory and returns a list of parsed data.

    Returns:
        list[dict]: A list of dictionaries containing parsed SARIF data.

    Raises:
        FileNotFoundError: If the specified directory does not exist.
        JSONDecodeError: If there is an error decoding the SARIF files.
    """
    # Get the list of SARIF files in the specified directory
    sarif_files = os.listdir(DATA_DIR)

    # Filter the list to include only files ending with .sarif
    sarif_files = [file for file in sarif_files if file.endswith('.sarif')]

    # Extract the hashes and dates from the file names
    hashes = [file.split('-')[1] for file in sarif_files]
    dates = ['-'.join(file.split('-')[2:])[:-6] for file in sarif_files]

    # Create the full file paths
    sarif_files = [os.path.join(DATA_DIR, file) for file in sarif_files]

    sarifs = []
    i = 0 
    relevant_keys = {'results': 'all_vulnerabilities'}

    # Iterate through each SARIF file
    for file in sarif_files:

        # Open the file and load the JSON data
        with open(file, 'r') as f:
            data = json.load(f)['runs'][0]

            # Call the get_severity function to retrieve severity information
            get_severity(data)

            # Create a new dictionary with relevant keys and add hash and date information
            new_data = {new_key: data[old_key] for old_key, new_key in relevant_keys.items()}
            new_data['hash'] = hashes[i]
            new_data['date'] = dates[i]
            
            # Call the get_stats function to calculate statistics
            get_stats(new_data)

            # Call the parse_results function to extract file and line information
            parse_results(new_data)

            # Append the new_data dictionary to the sarifs list
            sarifs.append(new_data)
        i += 1

    return sarifs
    
def get_severity(data):
    """
    Retrieves the severity of vulnerabilities from the given data.

    Args:
        data (dict): The data containing vulnerability information.

    Returns:
        None

    Raises:
        KeyError: If the required keys are not present in the data.

    """
    # Get the relevant vulnerabilities from the data
    relevant_vuls = data['results']
    vul_dict = {}
    all_vuls = data['tool']['driver']['rules']

    # Create a dictionary of vulnerabilities with their properties
    for vul in all_vuls:
        vul_dict[vul['id']] = vul['properties']

    # Assign the details of each vulnerability from the vul_dict
    for vul in relevant_vuls:
        vul['details'] = vul_dict[vul['ruleId']]
    pass

def get_stats(data):
    """
    Calculates the statistics for the given data.

    Args:
        data (dict): A dictionary containing vulnerability data.

    Returns:
        None

    Modifies:
        Updates the 'stats' key in the 'data' dictionary with the calculated statistics.

    """
    total_security_severity = 0
    total_errors = 0
    total_warnings = 0

    # Iterate through each vulnerability in the data
    for bug in data['all_vulnerabilities']:
        severity = bug['details']['problem.severity']

        # Update the total_errors and total_warnings based on severity
        if severity == 'error': total_errors += 1
        elif severity == 'warning': total_warnings += 1

        # Update the total_security_severity based on the vulnerability's security-severity
        total_security_severity += float(bug['details']['security-severity'])

    # Update the 'stats' key in the 'data' dictionary with the calculated statistics
    data['stats'] = {
        'total_security_severity': total_security_severity,
        'total_errors': total_errors,
        'total_warnings': total_warnings
    }

def parse_results(sarif):
    """
    Parses the SARIF results and extracts the file and line information for each vulnerability.

    Args:
        sarif (dict): The SARIF results dictionary.

    Returns:
        None

    Modifies:
        Updates the 'locations' field of each vulnerability in the 'sarif' dictionary.
    """
    # Iterate through each vulnerability in the 'all_vulnerabilities' list
    for vul in sarif['all_vulnerabilities']:
        locations = vul['locations']
        loc = []

        # Iterate through each location in the 'locations' list
        for location in locations:
            new_loc = {}

            # Extract the file and line information from the location
            new_loc['file'] = location['physicalLocation']['artifactLocation']['uri']
            new_loc['line'] = location['physicalLocation']['region']['startLine']

            # Append the new_loc dictionary to the loc list
            loc.append(new_loc)
            
        # Update the 'locations' field of each vulnerability with the extracted information
        vul['locations'] = loc

# sarif_runs = parse_sarif_files()
# parse_sarif_results(sarif_runs)