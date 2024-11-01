import React from 'react';
import removeIcon from '../../assets/chat-page/remove-icon.png';
import sendIcon from '../../assets/chat-page/send-icon.png';

interface Props {
  message: string
  setMessage: React.Dispatch<React.SetStateAction<string>>
  handleChat(): void;
}

const ChatInput = (props: Props) => {
  const {message, setMessage, handleChat} = props;

  const showRemoveBtn = (currentMessage = '') => {
    const btn = document.querySelector('.remove-btn');
    if (!btn) return;
    btn.style.visibility = (currentMessage) ? 'visible' : 'hidden';
  }

  const changeRows = () => {
    const field = document.querySelector('.input-area textarea');
    if (!field) return;

    field.style.height = 'auto';
    const maxRows = 5;
    const lineHeight = 30;
    const newHeight = Math.min(field.scrollHeight, lineHeight * maxRows);
    field.style.height = `${newHeight}px`;

    console.log(field.scrollHeight);
    const chatInput = document.querySelector('.chat-input');
    if (!chatInput) return;
    chatInput.style.height = `${newHeight + 60}px`;
  }

  const removeText = () => {
    setMessage('');
    const field = document.querySelector('.input-area textarea');
    if (!field) return;
    field.value = '';
    changeRows();
    showRemoveBtn();
  }

  return (
    <div className='chat-input-container'>
      <div className='chat-input'>
          <div className='input-area'>
              <textarea 
                rows={1}
                placeholder='Enter a message...'
                value={message}
                onInput={changeRows}
                onChange={(e) => {
                  setMessage(e.target.value);
                  showRemoveBtn(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleChat();
                    removeText();
                  }
                }}
              />
            <button
            className='remove-btn'
            onClick={removeText}
            >
              <img src={removeIcon}/>
            </button>
          </div>
        <button 
        className='send-btn'
        onClick={() => {
          handleChat();
          removeText();
        }}
        >
          <img src={sendIcon} />
        </button>
      </div>
    </div>
  );
}

export default ChatInput;