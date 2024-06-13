import streamlit as st

file_name = r'C:\Users\ryficano\repo\code-scanning-ai-hackathon\ryotest\commitstringexample.txt'

with open(file_name, 'r') as file:  
    commit_str = file.read()

lines = commit_str.split("\n")
for line in lines:
    print(line)

commit_name = "COMMIT NAME"
commit_author = "AUTHOR NAME"
commit_committer = "COMMITTER NAME"
commit_file = "FILE NAME"

print(commit_str)

st.title(commit_name)
st.markdown("Author: " + commit_author + "  |  " + "Committer: " + commit_committer)

for str in commit_str:
    st.header(commit_file)
    st.write(str)