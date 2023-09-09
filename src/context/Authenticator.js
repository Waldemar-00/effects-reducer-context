import { createContext } from 'react'

const Authenticator = createContext({
  isLoggedIn: false,
  onLogout: () => {},
})

export default Authenticator