import React, { useState } from 'react';
import './GithubUsernameForm.css';

type GithubUsernameFormProps = {
  onSubmitUsername: (username: string) => void;
};

export default function GithubUsernameForm({ onSubmitUsername }: GithubUsernameFormProps) {
  const [input, setInput] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitUsername(input);
    setInput('');
  };

  return (
    <form onSubmit={onSubmit} className="GithubUsernameForm">
      <input value={input} onChange={onChange}></input>
      <button type="submit">조회</button>
    </form>
  );
}
