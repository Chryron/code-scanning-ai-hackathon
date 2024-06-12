# SAST Dashboard Challenge - README

## Challenge Description
The SAST Dashboard challenge aims to address the problem of collecting data, tracking violations, and displaying reports from decentralized SAST (Static Application Security Testing) scans. The goal is to create a dashboard using web technologies that can collect telemetry data through REST APIs and provide visualizations and reports on the SAST scan results.

## Repository Selection
For this challenge, we have chosen the open-source repository [TensorFlow](https://github.com/tensorflow/tensorflow) as the target for the SAST scans and data collection.

## Scans in SARIF Format
We provide 5 scans in SARIF (Static Analysis Results Interchange Format) format from five different commits in the "tensorflow" repository. Each scan is associated with a specific commit hash and provides information about the findings in the codebase. Additionally, we provide the FLOC (Finding Level of Confidence) for each scan.

The SARIF files and their corresponding commit hashes and FLOC values are available at https://mkmartifactory.amd.com:443/artifactory/SW-SITARTIFACTS-PROD-LOCAL/prototyping/database-5a7786812dd4-2024-01-11.zip, (see the README.md file in the [resources/codeql_scans](./resources/codeql_scans) folder).

## Important Considerations
In this challenge, the following aspects are crucial to us:

1. **Data Collection**: The dashboard should be able to collect telemetry data from the SAST scans through REST APIs.
2. **Violation Tracking**: The dashboard should track and manage violations found during the SAST scans, providing insights into the severity and impact of each violation.
3. **Reporting**: Can you find a way to create a comprehensive report out of the SARIF file as a summary? 

## Scan Hierarchy
The scan hierarchy in the SAST Dashboard follows the structure of Project -> Pipeline -> Scan. Here's a brief description of each level:

1. **Project**: Users will have a project created for them by the admin. A project represents a specific application or codebase that undergoes SAST scans.
2. **Pipeline**: Inside the project, users can create pipelines. Pipelines represent different stages or environments in the software development lifecycle where SAST scans are performed.
3. **Scan**: Each pipeline can have several scans. A scan represents a specific instance of a SAST analysis performed on the codebase at a particular point in time.

By organizing scans within pipelines and projects, users can effectively manage and track the SAST scan results for different applications and stages of development.

## Getting Started
To participate in the SAST Dashboard challenge, follow these steps:

1. Clone the "tensorflow" repository to your local machine.
2. Access the [resources/codeql_scans](./resources/codeql_scans) folder, which contains the SARIF files for the 5 scans.
3. Build a web-based dashboard using web technologies of your choice.
4. Implement the functionalities for data collection, violation tracking, and reporting based on the SARIF scan results.
5. Customize the dashboard to reflect the scan hierarchy of Project -> Pipeline -> Scan.
6. Provide visualizations and reports that help users understand and analyze the SAST scan findings.
7. Submit your solution for evaluation.

Good luck with the challenge! We look forward to seeing your innovative SAST Dashboard solution.