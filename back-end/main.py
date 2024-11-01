from flask import Flask, request, session, Request, Response
from flask_cors import CORS
import json, time
from typing import TypedDict

class Message(TypedDict):
  content: str
  className: str
  type: str
  
  def __init__(self, data: dict) -> None:
    self.content = data['content']
    self.className = data['className']
    self.type = data['type']

app = Flask(__name__)

allowed_origins: list[str] = ['http://localhost:5173', 'http://localhost:5000']
CORS(app, resources={r'/*': {'origins': allowed_origins}})

@app.route('/', methods=['POST', 'GET'])
def handleMessage() -> list[Message]:
  data = Message(request.json)
  return createAIMessage(data)

def createAIMessage(userMessage: Message) -> list[Message]:
  # Example: mirror the user message
  aiMessage = Message(content = userMessage['content'], className = 'incoming', type = 'text')
  #time.sleep(2)
  messageList: list[Message] = []
  messageList.append(aiMessage)
  #messageList.append(aiMessage)
  #messageList.append(aiMessage)
  return messageList

if __name__ == '__main__':
  app.run(debug = True)