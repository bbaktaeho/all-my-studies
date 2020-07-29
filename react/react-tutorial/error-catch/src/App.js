import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';
import ErrorBoundary from './ErrorBoundary';

const a = 1;

function App() {
  const user = { id: 1, username: 'bbak' };
  // user props를 지정하지 않았다면 에러가 남
  return (
    <ErrorBoundary>
      <User></User>
    </ErrorBoundary>
  );
}

export default App;
