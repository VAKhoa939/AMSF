import React from 'react';
import removeIcon from '../../assets/chat-page/remove-icon.png';
import sendIcon from '../../assets/chat-page/send-icon.png';

interface Props {
  messageText: string
  setMessageText: React.Dispatch<React.SetStateAction<string>>
  handleChat(): void;
}

const ChatInput = (props: Props) => {
  const TEXTAREA_MAX_ROWS = 5;
  const TEXTAREA_LINE_HEIGHT = 30

  const {messageText, setMessageText, handleChat} = props;

  const showRemoveBtn = (currentMessage = '') => {
    const btn = document.querySelector('.remove-btn') as HTMLButtonElement;
    btn.style.visibility = (currentMessage) ? 'visible' : 'hidden';
  }

  const changeRows = () => {
    const field = document.querySelector('.input-area textarea') as HTMLTextAreaElement;
    field.style.height = 'auto';

    const newHeight = Math.min(field.scrollHeight, TEXTAREA_LINE_HEIGHT * TEXTAREA_MAX_ROWS);
    field.style.height = `${newHeight}px`;
    console.log(field.scrollHeight);

    const chatInput = document.querySelector('.chat-input') as HTMLDivElement;
    chatInput.style.height = `${newHeight + 60}px`;
  }

  const removeText = () => {
    setMessageText('');
    const field = document.querySelector('.input-area textarea') as HTMLTextAreaElement;
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
                value={messageText}
                onInput={changeRows}
                onChange={(e) => {
                  setMessageText(e.target.value);
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