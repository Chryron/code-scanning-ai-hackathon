from flask import Flask, render_template, request
import json
import operator
from hackathon.src.backend.main import init

app = Flask(__name__)

# Load the commit data from a file or define it directly
commit_data = init()

@app.route('/')
def index():
    sort_by = request.args.get('sort_by', 'date')
    reverse = request.args.get('reverse', 'false') == 'true'
    
    sorted_commits = sorted(commit_data, key=operator.itemgetter(sort_by), reverse=reverse)
    return render_template('index.html', commits=sorted_commits, sort_by=sort_by, reverse=reverse)

@app.route('/commit/<commit_hash>')
def commit_details(commit_hash):
    commit = next((c for c in commit_data if c['hash'] == commit_hash), None)
    return render_template('commit_details.html', commit=commit)

if __name__ == '__main__':
    app.run(debug=True)
