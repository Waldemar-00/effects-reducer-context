import { createContext } from 'react'

const Authenticator = createContext({
  isLoggedIn: false,
})

export default Authenticator