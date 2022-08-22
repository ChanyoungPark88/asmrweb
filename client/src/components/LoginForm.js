import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

function LoginForm({ Login, setModalIsOpen }) {
  const [user, setUser] = useState({ name: '' });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(user);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='login-window'>
        <div className='login-header'>
          <h2>Enter the chatroom</h2>
          <AiOutlineClose
            className='quit-window'
            onClick={() => setModalIsOpen(false)}
          />
        </div>
        <div className='login-footer'>
          <input
            type='text'
            placeholder='name'
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            value={user.name}
            required
          />
          <button className='chat-enter'>&#8629;</button>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
