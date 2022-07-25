import React, { useState } from 'react';
import { FaRegWindowClose } from 'react-icons/fa';

function ChatRoom({ Logout }) {
  const [details, setDetails] = useState('');

  return (
    <div className='chatContainer'>
      <FaRegWindowClose className='quitButton' onClick={Logout} />
      <div className='chatBox'>
        <h2>Chat Room Text Box</h2>
        <div className='chatInput'>
          <input type='text' placeholder='Type on here' required />
          <input type='submit' value='Send' />
        </div>
      </div>
    </div>
  );
}

export default ChatRoom;
