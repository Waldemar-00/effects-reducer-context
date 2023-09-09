import React, { useState, useEffect } from "react" 

import Login from "./components/Login/Login" 
import Home from "./components/Home/Home" 
import MainHeader from "./components/MainHeader/MainHeader" 
import Authenticator from "./context/Authenticator" 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false) 
  useEffect(() => {
    const logInInfo = localStorage.getItem('isLogIn')
    if (logInInfo === '1') {
      setIsLoggedIn(true) 
    }
  }, [])
  const loginHandler = (email, password) => {
    localStorage.setItem('isLogIn', '1')
    setIsLoggedIn(true) 
  } 

  const logoutHandler = () => {
    localStorage.removeItem('isLogIn')
    setIsLoggedIn(false) 
  } 

  return (
    <Authenticator.Provider value={
      {
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
      }
    }>
      <MainHeader />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </Authenticator.Provider>
  ) 
}

export default App 
