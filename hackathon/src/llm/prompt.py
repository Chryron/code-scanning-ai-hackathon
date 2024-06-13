from dotenv import load_dotenv
import os

from hackathon.src.llm.wrapper import HubChatModel
from hackathon.src.llm.enums import ChatDeploymentEnum
from langchain.schema import HumanMessage, SystemMessage, ChatMessage


load_dotenv()
API_KEY = os.environ.get("Ocp-Apim-Subscription-Key")
chat = HubChatModel(deployment=ChatDeploymentEnum.Default, api_key = API_KEY, max_tokens = 8000)

def predict(prompt):
    # Define the input message
    messages = [HumanMessage(content=prompt)]
    AI_message = chat.predict_messages(messages)
    print(AI_message.content)
    return AI_message.content

memeo = None
def fix_vulnerability(vulnerability_dict):
    global memeo
    if memeo:
        return memeo
    vulnerability_id = vulnerability_dict['vulnerability']['ruleId']
    vulnerability_message = vulnerability_dict['vulnerability']['message']['text']
    line_number = vulnerability_dict['vulnerability']['locations'][0]['line']

    code = ""
    relevant_code_lines = vulnerability_dict['file']['details']
    for line in relevant_code_lines:
        if line['add_line'] is None: continue
        elif line['add_line'] < line_number + 5 and line['add_line'] > line_number - 5:
            code += f'[{line["add_line"]}]:' + line['content']+ '\n'
       
    # Define the input message
    fix_vulnerability_prompt = """The following vulnerability was found by a CodeQL scan within a codebase:
{vulnerability_id}: {vulnerability_message}

The vulnerability is located at line {line_number} of the following code snippet:
{code}

Can you please suggest a fix to address this vulnerability? If possible provide code suggestions to address the vulnerability.
"""
    output = predict(fix_vulnerability_prompt.format(
        vulnerability_id = vulnerability_id, 
        vulnerability_message = vulnerability_message,
        line_number = line_number,
        code = code))
    memeo = output
    return output