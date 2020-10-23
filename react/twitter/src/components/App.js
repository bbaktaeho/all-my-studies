import React, { useEffect, useState } from 'react';
import Router from 'components/Router';
import { authService } from 'myBase';

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) setIsLoggedIn(true);
      else setIsLoggedIn(false);
      setInit(true);
    });
  }, []);
cd
  return (
    <>
      {init ? <Router isLoggedIn={isLoggedIn} /> : 'Initializing'}
      <footer>&copy; Twitter {new Date().toLocaleString()} </footer>
    </>
  );
}

export default App;
