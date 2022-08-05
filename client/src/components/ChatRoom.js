import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import axios from 'axios';

function ChatRoom(props) {
  let user = props.user.name;

  const [messages, setMessages] = useState([]);
  console.log(messages);

  return (
    <div className='chatContainer'>
      <AiOutlineClose
        className='quitButton'
        onClick={() => props.setUser({ name: '' })}
      />
      <div className='chatBox'>
        <div className='chatMessages'>{user} participated in the chat room</div>
        <div className='chatInput'>
          <form>
            <input
              id='msg'
              type='text'
              placeholder='Enter message'
              required
              autoComplete='off'
              onChange={(e) => setMessages(e.target.value)}
              value={messages}
            />
          </form>
          <input type='submit' value='Send' />
        </div>
      </div>
    </div>
  );
}

export default ChatRoom;
