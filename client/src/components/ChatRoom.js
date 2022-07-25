import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

function ChatRoom({ Logout }) {
  const [message, setMessage] = useState('');

  return (
    <div className='chatContainer'>
      <AiOutlineClose className='quitButton' onClick={Logout} />
      <div className='chatBox'>
        <div className='chatMessages'>
          <div class='message'>
            <p class='meta'>
              Brad <span>9:12pm</span>
            </p>
            <p class='text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              repudiandae.
            </p>
          </div>
          <div class='message'>
            <p class='meta'>
              Mary <span>9:15pm</span>
            </p>
            <p class='text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              repudiandae.
            </p>
          </div>
        </div>
        <div className='chatInput'>
          <input
            id='msg'
            type='text'
            placeholder='Enter message'
            required
            autoComplete='off'
            onChange={(e) => setMessage({ message: e.target.value })}
            value={message}
          />
          <input type='submit' value='Send' />
        </div>
      </div>
    </div>
  );
}

export default ChatRoom;
