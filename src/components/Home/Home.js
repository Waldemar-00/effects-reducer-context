import React, {useContext} from "react" 
import Authenticator from "../../context/Authenticator"
import Button from '../UI/Button/Button'
import Card from "../UI/Card/Card" 
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
