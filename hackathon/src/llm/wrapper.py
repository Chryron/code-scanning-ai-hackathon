from typing import Any, List, Mapping, Optional, Union, Dict

import requests
from enum import Enum
from pydantic import Field

from langchain.callbacks.manager import CallbackManagerForLLMRun
from langchain.llms.base import LLM

from .enums import DeploymentEnum, ChatDeploymentEnum

### LangChain Completion Model ###


#Adapted from https://python.langchain.com/docs/modules/model_io/models/llms/how_to/custom_llm
class HubModel(LLM):
    #Note: Pydantic turns these into args for the __init__ method. Field variables have validation.
    #Note 2: Some options will have no effect unless you extend this to implement _generate
    #        Namely, options that effect the number of completions that are returned (e.g. stream, n, etc.)
    api_key:str
    deployment:DeploymentEnum = DeploymentEnum.Default
    max_tokens:Optional[int] = Field(80,ge=1)
    temperature:Optional[float] = Field(0,le=2,ge=0)
    top_p:Optional[int] = Field(1,le=1,ge=0)
    logit_bias: Optional[Any] = None
    user:Optional[str] = None
    n:Optional[int] = Field(1,gt=0)
    streaming:Optional[bool] = False #probably doesn't work
    logprobs:Optional[int] = None
    suffix:Optional[str] = None
    echo: Optional[bool] = False
    presence_penalty:Optional[float] = Field(0,le=2,ge=-2)
    frequency_penalty:Optional[float] = Field(0,le=2,ge=-2)
    best_of:Optional[int] = Field(1,gt=0)

    @property
    def _llm_type(self) -> str:
        return "AMD-LLM-Hub"

    def _call(
        self,
        prompt: str,
        stop: Optional[List[str]] = None,
        callbacks: Optional[CallbackManagerForLLMRun] = None,
    ) -> str:
        request = {
            "prompt": prompt,
            "stop":stop,
            **self._request_params
        }

        header = {"Ocp-Apim-Subscription-Key": self.api_key}
        response = requests.post(url=f"https://llm-api.amd.com/azure/engines/{self.deployment.value}/completions",
                            json=request,
                            headers=header)
        response.raise_for_status()
        return response.json()['choices'][0]['text']

    def generate(prompts: List[str], 
                stop: Optional[List[str]] = None, 
                callbacks: Any = None, *, tags: Optional[Union[List[str], List[List[str]]]] = None,
                metadata: Optional[Union[Dict[str, Any], List[Dict[str, Any]]]] = None, 
                run_name: Optional[Union[str, List[str]]] = None, 
                **kwargs: Any):
        ...
        # generate a bunch of responses using n


    @property
    def _request_params(self) -> Mapping[str,Any]:
        """Get the Parameters that form the request body"""
        return {
            "max_Tokens": self.max_tokens,
            "temperature": self.temperature,
            "top_P": self.top_p,
            "logit_Bias": self.logit_bias,
            "user": self.user,
            "n": self.n,
            "stream": self.streaming,
            "logprobs": self.logprobs,
            "suffix": self.suffix,
            "echo": self.echo,
            "presence_Penalty": self.presence_penalty,
            "frequency_Penalty": self.frequency_penalty,
            "best_Of": self.best_of
        }

    @property
    def _identifying_params(self) -> Mapping[str, Any]:
        """Get the identifying parameters."""
        return {
            "deployment": self.deployment,
            **self._request_params
        }

### End of LangChain Completion Model ###

### LangChain Chat Model ###

from langchain.chat_models.base import SimpleChatModel
from langchain.schema.messages import ChatMessage, BaseMessage



#mappings from LangChain roles to roles in the API
role_mapping = {
    "ai": "assistant",
    "human": "user",
    "function": NotImplemented,
    "system":"system"
}

def parse_role(message:BaseMessage):
    if(message.type == "chat"):
        return message.role
    else:
        return role_mapping[message.type]

class HubChatModel(SimpleChatModel):
    api_key:str
    deployment:ChatDeploymentEnum = ChatDeploymentEnum.Default
    max_tokens:Optional[int] = 80 # Field(80,ge=1)
    temperature:Optional[float] = 0 # Field(0,le=2,ge=0)
    user:Optional[str] = None
    n:Optional[int] = 1 # Field(1,gt=0)
    streaming:Optional[bool] = False # probably doesn't work
    presence_penalty:Optional[float] = 0 # Field(0,le=2,ge=-2)
    frequency_penalty:Optional[float] = 0 # Field(0,le=2,ge=-2)

    @property
    def _llm_type(self) -> str:
        return "AMD-LLM-Hub-Chat"

    def _call(
        self,
        messages: List[BaseMessage],
        stop: Optional[List[str]] = None,
        run_manager: Optional[CallbackManagerForLLMRun] = None,
    ) -> str:
        
        parsed_messages = [{"role": parse_role(message), "content": message.content} for message in messages]
        
        request = {
            "messages": parsed_messages,
            "stop":stop,
            **self._request_params
        }

        header = {"Ocp-Apim-Subscription-Key": self.api_key}
        response = requests.post(url=f"https://llm-api.amd.com/azure/engines/{self.deployment.value}/chat/completions",
                            json=request,
                            headers=header)
        response.raise_for_status()
        return response.json()['choices'][0]['message']['content']



    @property
    def _request_params(self) -> Mapping[str,Any]:
        return {
            "max_Tokens": self.max_tokens,
            "temperature": self.temperature,
            "user": self.user,
            "n": self.n,
            "stream": self.streaming,
            "presence_Penalty": self.presence_penalty,
            "frequency_Penalty": self.frequency_penalty,
        }

    @property
    def _identifying_params(self) -> Mapping[str, Any]:
        """Get the identifying parameters."""
        return {
            "deployment": self.deployment,
            **self._request_params
        }