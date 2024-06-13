from enum import Enum

#currently only supporting Azure models
class DeploymentEnum(str, Enum):
    Default = 'default'
    GPT3_5 = "swe-gpt35-turbo-exp1"
    TEXT_DAVINCI_003="swe-text-davinci-003-exp1"
    # the below models may or may not work as this is a prompt completion LangChain Model
    # EMBEDDING_ADA_002="text-embedding-ada-002"
    # IMG_GEN = "swe-image-generations-exp1" 
    # These models support chat only (see HubChatModel)
    # GPT4_8K = "swe-gpt4-8k-exp1"
    # GPT4_32K = "swe-gpt4-32k-exp1"


class ChatDeploymentEnum(str, Enum):
    """
    Deployments that support the Chat API
    """
    Default = 'default'
    GPT3_5 = "swe-gpt35-turbo-exp1"
    GPT4_8K = "swe-gpt4-8k-exp1"
    GPT4_32K = "swe-gpt4-32k-exp1"