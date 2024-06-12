from flask import Flask, render_template


app = Flask(__name__)


# Route to display commit history
@app.route('/commits/<owner>/<repo>')
def show_commits(owner, repo):
    repository = g.get_user(owner).get_repo(repo)
    commits = repository.get_commits()
    commit_list = []

    for commit in commits[:10]:  # Fetch the last 10 commits
        commit_info = {
            'sha': commit.sha,
            'author': commit.commit.author.name,
            'email': commit.commit.author.email,
            'date': commit.commit.author.date,
            'message': commit.commit.message,
            'url': commit.html_url
        }
        commit_list.append(commit_info)

    return render_template('commits.html', commits=commit_list, owner=owner, repo=repo)

if __name__ == '__main__':
    app.run(debug=True)
