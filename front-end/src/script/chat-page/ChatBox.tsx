import aiAvatar from '../../assets/chat-page/ai-avatar.png'
import Message from './Message'

const createChat = (message: Message) => {
  const chatbox = document.querySelector('.chat-box');
  if (chatbox) chatbox.scrollTo(0, chatbox.scrollHeight);

  if (message.className === 'incoming') { // AI Response
    return (
      <div className='chat incoming'>
        <img className='avatar' src={aiAvatar}/>
        <p>{message.content}</p>
      </div>
    );
  }
  return ( // User Request
    <div className='chat outgoing'>
      <p>{message.content}</p>
    </div>
  );
}

interface Props {
  messageList: Message[]
}

const ChatBox = (props: Props) => {
  const {messageList} = props;

  return (
    <div className='chat-box'>
      {messageList.map(message => createChat(message))}
      <div className='chat incoming'>
        <img className='avatar' src={aiAvatar}/>
        <p>Hi there. How can I help you?</p>
      </div>
    </div>
  )
}

export default ChatBox