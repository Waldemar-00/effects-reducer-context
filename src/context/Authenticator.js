import { createContext, useState, useEffect } from 'react'
const Authenticator = createContext({
  isLoggedIn: false,
  onLogin: (email, password) => {},
  onLogout: () => {},
})

export const AuthenticatorProvider = ({ children }) => {
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
    <Authenticator.Provider value={{
      isLoggedIn: isLoggedIn,
      onLogout: logoutHandler,
      onLogin: loginHandler,
    }}>
      {children}
    </Authenticator.Provider>
  )
}
export default Authenticator