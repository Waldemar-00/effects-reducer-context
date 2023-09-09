import React, {useContext} from "react" 
import Login from "./components/Login/Login" 
import Home from "./components/Home/Home" 
import MainHeader from "./components/MainHeader/MainHeader" 
import Authenticator from "./context/Authenticator"

function App() {
  const globalContext = useContext(Authenticator)
  return (
    <React.Fragment>
      <MainHeader/>
      <main>
        {!globalContext.isLoggedIn && <Login />}
        {globalContext.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  ) 
}

export default App 
