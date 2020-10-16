import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from '../routes/Auth';
import Home from '../routes/Home';

export default () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </>
        ) : (
          <Route exact path="/">
            <Auth></Auth>
          </Route>
        )}
      </Switch>
    </Router>
  );
};
