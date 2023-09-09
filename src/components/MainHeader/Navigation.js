import React from "react" 
import Authenticator from "../../context/Authenticator"

import styles from "./Navigation.module.css" 

const Navigation = ({ onLogout }) => {
  return (
    <Authenticator.Consumer>
      {
        (globalContext) => {  
          return (
            <nav className={styles.nav}>
              <ul>
                {globalContext.isLoggedIn && (
                  <li>
                    <a href="/">Пользователи</a>
                  </li>
                )}
                {globalContext.isLoggedIn && (
                  <li>
                    <a href="/">Админ</a>
                  </li>
                )}
                {globalContext.isLoggedIn && (
                  <li>
                    <button onClick={globalContext.onLogout}>Выйти</button>
                  </li>
                )}
              </ul>
            </nav>
          )
        }
      }
    </Authenticator.Consumer>
  ) 
} 

export default Navigation 
