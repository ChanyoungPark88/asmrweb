import React, { useState } from 'react';

function LoginForm({ Login }) {
  const [user, setUser] = useState({ name: '' });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(user);
    // console.log(user);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='loginContainer'>
        <h2>Enter the chatroom</h2>
        <input
          type='text'
          placeholder='name'
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          value={user.name}
          required
        />
        <input type='submit' value='Enter' />
      </div>
    </form>
  );
}

export default LoginForm;
