import subprocess
git_log_output = subprocess.check_output(['git', 'log']).decode('utf-8')
log_entries = git_log_output[len('commit'):].split('\n\ncommit')
gitlog = []
for entry in log_entries:
    entry = [e.strip() for e in entry.strip().split("\n") if e]
    keys = ['hash','author','date','message']
    entry = dict(zip(keys, entry))
    entry["author"] = entry["author"][8:]
    entry["date"] = entry["date"][8:]
    
    gitlog.append(entry)



import streamlit as st
st.title("Git log")
    
# Define the URLs for each button  
urls = [  
    "https://www.example.com/page1",  
    "https://www.example.com/page2",  
    "https://www.example.com/page3",  
    "https://www.example.com/page4",  
    "https://www.example.com/page5"  
]  
  
# Create the buttons  
for url in urls:  
    st.button(url)        


# for entry in gitlog:
#     st.write(entry['message'])
#     st.write("<hr>", unsafe_allow_html=True)  
