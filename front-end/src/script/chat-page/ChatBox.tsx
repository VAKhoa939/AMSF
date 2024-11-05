import aiAvatar from '../../assets/chat-page/ai-avatar.png'
import Message from './Message'

interface Props {
  messageList: Message[]
}

const ChatBox = (props: Props) => {
  const {messageList} = props;

  function createIncomingTextChat(message: Message) {
    return (
      <div className='chat incoming'>
        <img className='avatar' src={aiAvatar}/>
        <p>{message.content}</p>
      </div>
    );
  }

  function createChat(message: Message) {
    const chatbox = document.querySelector('.chat-box') as HTMLDivElement;
    chatbox.scrollTo(0, chatbox.scrollHeight);
  
    if (message.className === 'incoming') { // AI Response
      switch (message.type) {
        case 'image': // insert image function here
        case 'table': // insert table function here
        case 'text':
          return createIncomingTextChat(message);
        default:
          return (<></>);
      }
    }
    return ( // User Request
      <div className='chat outgoing'>
        <p>{message.content}</p>
      </div>
    );
  }

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