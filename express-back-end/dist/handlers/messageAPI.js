"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postAIMessage = postAIMessage;
const Message_1 = require("./Message");
function postAIMessage(request, response) {
    console.log(request.body);
    const data = request.body;
    if ((0, Message_1.isMessage)(data)) {
        const sendData = JSON.stringify(createAIMessage(data));
        console.log(sendData);
        response.status(201).send(sendData);
        return;
    }
    response.sendStatus(401);
}
;
function createAIMessage(userMessage) {
    const aiMessage = {
        content: userMessage.content,
        className: 'incoming',
        type: 'text'
    };
    const messageList = [];
    messageList.push(aiMessage);
    return messageList;
}
