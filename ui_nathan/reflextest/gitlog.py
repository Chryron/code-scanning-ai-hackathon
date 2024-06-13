import subprocess
# Fetch git log
git_log_output = subprocess.check_output(['git', 'log']).decode('utf-8')
import re


from datetime import datetime, timedelta  
from datetime import datetime, timedelta, timezone
  
def convert_time_string(time_string):
    # Convert the time string to a datetime object
    time_obj = datetime.strptime(time_string, '%a %b %d %H:%M:%S %Y %z')
    
    # Get the current time in the same timezone as the time object
    current_time = datetime.now(time_obj.tzinfo)
    
    # Calculate the time difference between now and the given time
    time_diff = current_time - time_obj
    
    # If the time difference is more than 7 days, return the date
    if time_diff.days >= 7:
        return time_obj.strftime('%Y-%m-%d')

    # If the time difference is between 7 days and 1 day, return the time difference in days
    elif time_diff.days >= 1:
        return f'{time_diff.days} day{"s" if time_diff.days>1 else ""} ago'

    # Otherwise, return the time difference in hours
    hours = time_diff.seconds // 3600
    return f'{hours} hour{"s" if hours>1 else ""} ago'



def parse_git_log(git_log):
    # Split the git log by 'commit '
    commits = git_log.split('\ncommit ')  # The first element is empty, so skip it

    commit_dicts = []
    for commit in commits:
        # Use regex to extract the hash, author, date, and message
        hash_ = re.search(r'([a-f0-9]{40})', commit).group(1)
        author = re.search(r'Author: (.*) <', commit).group(1)
        date = re.search(r'Date:   (.*)\n', commit).group(1)
        shortdate = convert_time_string(date)
        message = commit.split('\n\n')[1].strip()  # The message is after the first empty line

        # Create a dictionary for this commit
        commit_dict = {'hash': hash_, 'author': author, 'date': date, 'message': message, "shortdate":shortdate}

        # Append the dictionary to the list
        commit_dicts.append(commit_dict)

    return commit_dicts
gitlog = parse_git_log(git_log_output)
