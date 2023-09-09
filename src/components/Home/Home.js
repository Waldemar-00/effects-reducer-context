import React from "react" 
import Button from '../UI/Button/Button'
import Card from "../UI/Card/Card" 
import Authenticator from "../../context/Authenticator"
import {useContext} from 'react'
import styles from "./Home.module.css" 

const Home = () => {
  const globalContext = useContext(Authenticator)
  return (
    <Card className={styles.home}>
      <h1>Рады Вас Видеть Снова!</h1>
      <Button onClick={globalContext.onLogout}>Logout</Button>
    </Card>
  ) 
} 

export default Home 
