import subprocess
import streamlit as st

# Fetch git log
git_log_output = subprocess.check_output(['git', 'log']).decode('utf-8')
import re

def parse_git_log(git_log):
    # Split the git log by 'commit '
    commits = git_log.split('commit ')[1:]  # The first element is empty, so skip it

    commit_dicts = []
    for commit in commits:
        # Use regex to extract the hash, author, date, and message
        hash_ = re.search(r'([a-f0-9]{40})', commit).group(1)
        author = re.search(r'Author: (.*) <', commit).group(1)
        date = re.search(r'Date:   (.*)\n', commit).group(1)
        message = commit.split('\n\n')[1].strip()  # The message is after the first empty line

        # Create a dictionary for this commit
        commit_dict = {'hash': hash_, 'author': author, 'date': date, 'message': message}

        # Append the dictionary to the list
        commit_dicts.append(commit_dict)

    return commit_dicts
gitlog = parse_git_log(git_log_output)
for e in gitlog:
    print(e)
    print("----------")

# Function to display detailed view of a commit
def show_commit_detail(commit):
    st.title(f"Commit Details for {commit['hash']}")
    st.markdown(f"**Message:** {commit['message']}")
    st.markdown(f"**Author:** {commit['author']}")
    st.markdown(f"**Date:** {commit['date']}")

# Main app
st.title("Git log")

# CSS to remove margin between buttons
st.markdown(f"""
    <style>
    {open("style.css").read().replace(";","!important;")}
    </style>
""", unsafe_allow_html=True)

# Loop through the git log and create a button for each entry
for idx, entry in enumerate(gitlog):
    button_label = f"{entry['hash'][:7]} - {entry['author']}"
    button_label = f"{entry['message']}"
    if st.button(button_label, key=idx, ):
        st.session_state.commit_detail = entry
        st.experimental_rerun()

# If a commit is selected, show its details
if 'commit_detail' in st.session_state:
    show_commit_detail(st.session_state.commit_detail)

from st_click_detector import click_detector

# for g in gitlog:
htmlrow = """
<div class="commit-container">
    <a href="">
        <div class="commit">
            <div class="message">Fixed bug in user login</div> 
            <div class="bubble hash">a1b2c3d</div>
            <div class="commit-info">
                <div class="bubble author">John Doe</div>
                <div class="bubble date">2024-06-12</div>
            </div>

        </div>
    </a>
    <a href="">
        <div class="commit">
            <div class="message">Fixed bug in user login</div> 
            <div class="bubble hash">a1b2c3d</div>
            <div class="commit-info">
                <div class="bubble author">John Doe</div>
                <div class="bubble date">2024-06-12</div>
            </div>

        </div>
    </a>    <a href="">
        <div class="commit">
            <div class="message">Fixed bug in user login</div> 
            <div class="bubble hash">a1b2c3d</div>
            <div class="commit-info">
                <div class="bubble author">John Doe</div>
                <div class="bubble date">2024-06-12</div>
            </div>

        </div>
    </a>
</div>
"""
clicked = click_detector(htmlrow)

st.markdown(f"**{clicked} clicked**" if clicked != "" else "**No click**")
