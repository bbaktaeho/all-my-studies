import { authService } from 'myBase';
import React, { useState } from 'react';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState('');

  const onChange = (event) => {
    // event 안에 target은 태그의 name과 value를 가지고 있는 객체가 있다!
    const {
      target: { name, value },
    } = event;
    if (name === 'email') setEmail(value);
    else if (name === 'password') setPassword(value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        // create account
        data = await authService.createUserWithEmailAndPassword(email, password);
      } else {
        // login
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (e) {
      setError(e.message);
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          value={email}
          placeholder="Email"
          onChange={onChange}
          required
        ></input>
        <input
          name="password"
          type="password"
          value={password}
          placeholder="Password"
          onChange={onChange}
          required
        ></input>
        <input type="submit" value={newAccount ? 'Create Account' : 'Log In'} />
        {error}
      </form>
      <span onClick={toggleAccount}>{newAccount ? 'Log In' : 'Create Account'}</span>
      <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </div>
    </div>
  );
};
