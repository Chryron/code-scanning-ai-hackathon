# CodeQL Detective

- Team members: *Nazmus Saadat, Nathan Hung, Ryo Ficano*
---
# Project Setup Instructions

## Requirements
- Git
- Python (greater than 3.10, 3.12 is recommended)
- Poetry

## Setup Instructions

1. **Clone the Repository**:
    ```bash
    git clone <repository_url>
    cd <repository_name>
    ```

2. **Install Dependencies**:
    ```bash
    poetry install
    ```

3. **Activate the Virtual Environment**:
    ```bash
    poetry shell
    ```

4. **Environment Configuration**:
    - Copy the `.env.tmp` file and rename it to `.env`:
        ```bash
        cp .env.tmp .env
        ```
    - Edit the `.env` file to include your GitHub account token and internal Azure LLM API token.
        - [Instructions to create a GitHub personal access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)
        - [Instructions to request a AMD internal LLM API token](https://llm.amd.com/)
    - Optionally, specify the directory where you have cloned TensorFlow. If not specified, the system can handle this setup.

5. **Run the Project**:
    ```bash
    run
    ```

## Notes
Ensure all required tokens and paths are correctly configured in the `.env` file before running the project.
