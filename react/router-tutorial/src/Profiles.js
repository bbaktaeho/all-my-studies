import React from 'react';

import Profile from './Profile';
import { NavLink, Route } from 'react-router-dom';

import WithRouterSample from './WithRouterSample';

function Profiles() {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <NavLink
            to="/profiles/bbak1"
            activeStyle={{ background: 'black', color: 'white' }}
          >
            bbak1
          </NavLink>
        </li>
        <li>
          <NavLink to="/profiles/bbak2">homer</NavLink>
        </li>
      </ul>
      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해주세요</div>}
      ></Route>
      <Route path="/profiles/:name" component={Profile}></Route>
      {/* match는 현재 컴포넌트가 랜더링된 위치를 기준으로 가져옴 */}
      {/* location과 반대 */}
      <WithRouterSample></WithRouterSample>
    </div>
  );
}

export default Profiles;
