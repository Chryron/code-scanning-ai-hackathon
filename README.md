# CodeQL Detective

- Team members: *Nazmus Saadat, Nathan Hung, Ryo Ficano*
---
Welcome to the "CodeQL Detective" challenge! This project aims to automate the identification of commits responsible for introducing new issues in a codebase compared to a baseline, leveraging CodeQL scans and SARIF reports.

Challenge Description
In this challenge, we aim to analyze the TensorFlow repository, performing static code analysis using CodeQL scans and identifying commits that introduce new issues compared to a baseline commit.

Repository Selection
We have chosen the open-source repository TensorFlow as the target for the SAST scans and data collection.

Problem Statement
You are provided with a codebase that undergoes periodic CodeQL scans, generating reports that highlight multiple issues. The objective is to develop an automated solution that can pinpoint the exact commits responsible for introducing new issues when compared to a baseline.

Solution Overview
Step-by-Step Process
Baseline Identification:

Run CodeQL scans weekly.
Manually review the issues and fix them.
Denote the new commit as the baseline, deeming the issues present as safe to ignore.
SARIF Scans Parsing:

Parse SARIF scans generated every 10 days.
Identify issues, files, and line numbers from the SARIF JSON.
Repository Management:

Clone the repository once into a temporary directory to serve as a cache.
Perform git pull to update the repository whenever a new SARIF file is introduced.
Blame Analysis:

For each SARIF file, git checkout the commit hash associated with the file.
Run git blame on the identified files and lines to find the commit that made the most recent change.
Comparative Analysis:

Compare current vulnerabilities with the baseline to identify unique issues introduced since the baseline.
Commit Analysis:

Query the GitHub API with the commit hashes to retrieve code changes.
Identify the specific changes that caused the issues based on the file and line number from the SARIF report.
Frontend Interface
Main Page: Displays a list of SARIF files with the baseline highlighted. Each entry shows:

Commit hash
Author
Date
Number of errors, warnings, and total severity score (adjusted to the baseline)
Sortable by most errors, warnings, etc.
Detailed View: Clicking on an entry provides:

Diffs of code changes introducing each unique vulnerability.
Collapsible panels showing git diff, commit hash, author, committer information, and issue details (name, description, severity).
Button to query an LLM for fixing suggestions, displayed next to issue details.
Installation Instructions
Requirements
git: Install git on your system using your preferred method.
Python: Version 3.10 or above, 3.12 recommended.
Poetry: Install using pip install poetry.
Steps
Clone the repository:

sh
Copy code
git clone https://github.com/yourusername/codeql-detective.git
cd codeql-detective
Install dependencies:

sh
Copy code
poetry install
Activate the virtual environment:

sh
Copy code
poetry shell
Run the application:

sh
Copy code
app
Usage
The application automates the process of identifying commits that introduce new issues in a codebase by leveraging CodeQL scans and SARIF reports. The frontend provides an interface to visualize these findings, allowing easy navigation and detailed insights into each issue.

Evaluation Criteria
Accuracy: Identifies commits responsible for new issues accurately.
Efficiency: Handles large codebases and numerous commits efficiently.
Scalability: Scales to manage codebases with thousands of commits and issues.
User Experience: Provides a user-friendly interface for visualization.
Innovation: Showcases innovative approaches to enhance accuracy and efficiency.
Conclusion
Our solution efficiently automates the identification of vulnerability-inducing commits, providing a robust tool for maintaining code quality and security. Future improvements will include advanced analysis tools and enhanced user interfaces.

Contact
For any questions or contributions, please reach out to [your contact information].


