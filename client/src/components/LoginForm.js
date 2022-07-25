import React, { useState } from 'react';

function LoginForm({ Login }) {
  const [details, setDetails] = useState({ name: '' });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
    console.log(details);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='loginContainer'>
        <h2>Enter the chatroom</h2>
        <input
          type='text'
          placeholder='name'
          onChange={(e) => setDetails({ ...details, name: e.target.value })}
          value={details.name}
          required
        />
        <input type='submit' value='Enter' />
      </div>
    </form>
  );
}

export default LoginForm;
