import { Request, Response } from "express-serve-static-core";
import Message from "../dtos/message.dto";

export function postAIMessage(request: Request<[], [], Message>, response: Response) {
  console.log(request.body);
  const data = request.body;
  const sendData = JSON.stringify(createAIMessage(data));
  console.log(sendData);
  response.status(201).send(sendData);
};

function createAIMessage(userMessage: Message) {
  const aiMessage: Message = {
    content: userMessage.content,
    className: 'incoming',
    type: 'text'
  }
  const messageList: Message[] = []
  messageList.push(aiMessage);
  return messageList;
}