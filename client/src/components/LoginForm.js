import React, { useState } from 'react';
import { ImEnter } from 'react-icons/im';

function LoginForm({ Login }) {
  const [user, setUser] = useState({ name: '' });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(user);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='login-container'>
        <h2>Enter the chatroom</h2>
        <input
          type='text'
          placeholder='name'
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          value={user.name}
          required
        />
        <ImEnter type='submit' className='chat-enter' />
      </div>
    </form>
  );
}

export default LoginForm;
