import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineSend } from 'react-icons/ai';
import ScrollToBottom from 'react-scroll-to-bottom';
// import axios from 'axios';

function ChatRoom(props) {
  const [currentMessage, setCurrentMessage] = useState('');
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== '') {
      const messageData = {
        name: props.user.name,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ':' +
          new Date(Date.now()).getMinutes(),
      };

      await props.socket.emit('send_message', messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage('');
    }
  };

  useEffect(() => {
    props.socket.on('receive_message', (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [props.socket]);

  return (
    <div className='chat-window'>
      <div className='chat-header'>
        <p>Live Chat</p>
        <AiOutlineClose
          className='quit-window'
          onClick={() => props.setUser({ name: '' })}
        />
      </div>
      <div className='chat-body'>
        <ScrollToBottom className='message-container'>
          {messageList.map((messageContent) => {
            return (
              <div
                className='message'
                id={props.user.name === messageContent.name ? 'you' : 'other'}
              >
                <div>
                  <div className='message-content'>
                    <p>{messageContent.message}</p>
                  </div>
                  <div className='message-meta'>
                    <p id='time'>{messageContent.time}</p>
                    <p id='name'>{messageContent.name}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className='chat-footer'>
        <input
          type='text'
          value={currentMessage}
          placeholder='Write message here'
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === 'Enter' && sendMessage();
          }}
        />
        <AiOutlineSend className='send-message' onClick={sendMessage}>
          Enter
        </AiOutlineSend>
      </div>
    </div>
  );
}

export default ChatRoom;
