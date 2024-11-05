import {useState} from 'react'
import '../../css/ChatPage.css'
import ChatBox from './ChatBox'
import ChatInput from './ChatInput'
import Message, {isMessageList} from './Message'

const ChatPage = () => {
  const [messageText, setMessageText] = useState<string>('');
  const [messageList, setMessageList] = useState<Message[]>([]);

  const HANDLE_MESSAGE_URL = 'http://127.0.0.1:3000/message';
  //const HANDLE_MESSAGE_URL = 'http://127.0.0.1:5000/';
  const SECOND = 1000;
  let isWaiting = false;
  let waitingTimeoutId: number;

  const handleChat = () => {
    const trimMessage = messageText.trim();
    if (!trimMessage) return false;

    const userMessage: Message = {
      content: trimMessage, 
      className: 'outgoing',
      type: 'text'
    }

    showMessage(userMessage);

    waitingTimeoutId = showWaitingMessage();

    fetchAIResponse(userMessage);
  }

  const showMessage = (messageObject: Message) => {
    setMessageList(messageList => ([messageObject, ...messageList]));
  }

  const showWaitingMessage = () => {
    const waitingMessage: Message = {
      content: 'Thinking...', 
      className: 'incoming',
      type: 'text'
    }
    const timeoutId = setTimeout(() => {
      showMessage(waitingMessage);
      isWaiting = true;
      console.log(messageList);
    }, 1000);
    return timeoutId;
  }

  const cancelWaitingMessage = () => {
    if (!isWaiting) {
      clearTimeout(waitingTimeoutId);
      return;
    }
    setMessageList(messageList => 
      messageList.filter(message => message.content !== 'Thinking...')
    );
    isWaiting = false;
  }

  const fetchAIResponse = async (userMessage: Message) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userMessage)
    }

    try {
      const response = await fetch(HANDLE_MESSAGE_URL, requestOptions);
      const data = await response.json();

      if (isMessageList(data)) {
        cancelWaitingMessage();
        data.forEach((message, i) => {
          setTimeout(() => showMessage(message), SECOND * (i + 1));
        });
      }
    } 
    catch(error) {
      console.log(error);
      const errorMessage: Message = {
        content: 'Unexpected error. Please try again later.', 
        className: 'incoming',
        type: 'text'
      }
      cancelWaitingMessage();
      setTimeout(() => showMessage(errorMessage), SECOND * 2);
    }
  }

  return (
    <>   
      <div className='background'>
        <div className='chat-area'>
          <ChatBox 
          messageList={messageList}
          />
          <ChatInput 
          messageText={messageText}
          setMessageText={setMessageText}
          handleChat={handleChat}
          />
        </div>
      </div>
    </>
  );
}

export default ChatPage;