import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, HashRouter, MemoryRouter } from 'react-router-dom';

ReactDOM.render(
  // HashRouter 는 요즘 잘 안씀
  // MemoryRouter 는 가상의 주소가 값을 들고있기 때문에 url 변경이 보이지않음
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
