import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profiles from './Profiles';
import History from './HistorySample';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">내정보</Link>
        </li>
        <li>
          <Link to="/history">예제</Link>
        </li>
      </ul>
      <hr></hr>
      {/* a 태그는 페이지가 새로 로딩되므로 Link 컴포넌트를 사용해야함 */}
      {/* exact 는 완전히 경로가 일치할 때만 보여준다 */}
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/profiles" component={Profiles}></Route>
        <Route path="/history" component={History}></Route>
        <Route
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재 ㄴㄴ</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
