# Bug Bounty Hunter Challenge - README

## Challenge Description
Welcome to the "Bug Bounty Hunter" challenge! This challenge aims to address the backlog of vulnerabilities detected in SAST scans by implementing a gamification approach. The goal is to create a dashboard that encourages developers to sign up for open issues, fix them, and earn points based on their contributions.

## Repository Selection
For this challenge, we have chosen the open-source repository [TensorFlow](https://github.com/tensorflow/tensorflow) as the target for the SAST scans and data collection.

## Scans in SARIF Format
We provide 5 scans in SARIF (Static Analysis Results Interchange Format) format from five different commits in the "tensorflow" repository. Each scan is associated with a specific commit hash and provides information about the findings in the codebase. Additionally, we provide the FLOC (Finding Level of Confidence) for each scan.

The SARIF files and their corresponding commit hashes and FLOC values are available at https://mkmartifactory.amd.com:443/artifactory/SW-SITARTIFACTS-PROD-LOCAL/prototyping/database-5a7786812dd4-2024-01-11.zip, (see the README.md file in the [resources/codeql_scans](./resources/codeql_scans) folder).

## Problem Statement
You are provided with SARIF files that contain the results of SAST scans, highlighting multiple issues. The objective is to develop a dashboard that displays open issues, allows developers to sign up for issues, and mark them as fixed once they have addressed them. The dashboard should verify the fixes in the next scan, award points to the developers, and maintain a leaderboard showcasing the top contributors.

## Requirements
1. **Dashboard Creation**: Develop a dashboard that displays open issues extracted from the provided SARIF files.
2. **Issue Assignment**: Allow developers to sign up for open issues and mark them as fixed once they have addressed them.
3. **Fix Verification**: Verify the fixes in the next scan and, if possible, confirm if the fix was made by the developer who signed up for it.
4. **Point Allocation**: Award points to developers based on the severity of the issues they fix and for identifying false positives.
5. **Leaderboard**: Maintain a leaderboard showcasing the top ten developers based on the points they have earned.
6. **False Positive Handling**: If an issue is determined to be a false positive, award a point to the developer and persist the false positive info so that the issue does not show up in the dashboard from subsequent scans.

## Evaluation Criteria
1. **Functionality**: The dashboard should accurately display open issues, allow developers to sign up for issues, verify fixes, and maintain a leaderboard.
2. **Efficiency**: The solution should efficiently handle the process of issue assignment, fix verification, point allocation, and false positive handling.
3. **User Experience**: The dashboard should provide a user-friendly interface that encourages developers to participate in the bug bounty program.
4. **Innovation**: Showcase innovative approaches or techniques to enhance the functionality or user experience of your solution.

## Getting Started
To participate in the Bug Bounty Hunter challenge, follow these steps:

1. Access the SARIF files from the [resources](./resources) folder.
2. Develop a dashboard that displays open issues, allows developers to sign up for issues, and mark them as fixed.
3. Implement the functionalities for fix verification, point allocation, leaderboard maintenance, and false positive handling.
4. Ensure that your solution provides a user-friendly interface that encourages developers to participate in the bug bounty program.
5. Submit your solution for evaluation.

Good luck with the challenge! We look forward to seeing your innovative Bug Bounty Hunter solution.