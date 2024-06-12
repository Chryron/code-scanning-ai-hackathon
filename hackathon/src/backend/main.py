import os
from hackathon.src.parser.sarif import parse_sarif_files
from hackathon.src.github.api import query_github


# backend initialization for streamlit
def init():
    commits = parse_sarif_files()

    for commit in commits:
        commit['data'] = query_github(commit_sha = commit['hash'])
    return commits


if __name__ == "__main__":
    init()