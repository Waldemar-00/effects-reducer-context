import React, { useState, useReducer} from "react" 

import Card from "../UI/Card/Card" 
import styles from "./Login.module.css" 
import Button from "../UI/Button/Button" 

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false) 

  const [emailState, dispatchEmail] = useReducer((prevState, action) => {
    if (action.type === ' USER_INPUT_MAIL') {
      return {
        value: action.value,
        isValid: action.isValid,
      }
    }
    if (action.type === 'BLUR') {
      return {
        value: prevState.value,
        isValid: prevState.isValid,
      }
    }
    return {
      value: '',
      isValid: false,
    }
  }, { value: '', isValid: undefined })
  const [passwordState, dispatchPassword] = useReducer((prevState, action) => {
    if (action.type === 'USER_INPUT_PASSWORD') {
      return {
        value: action.value,
        isValid: action.isValid,
      }
    }
    if (action.type === 'BLUR') {
      return {
        value: prevState.value,
        isValid: prevState.isValid,
      }
    }
    return {
      value: '',
      isValid: false,
    }
  }, { value: '', isValid: undefined })
  
  const emailChangeHandler = (e) => {
    dispatchEmail({
      type: ' USER_INPUT_MAIL',
      value: e.target.value,
      isValid: e.target.value.includes('@')
    }) 
    setFormIsValid(e.target.value.includes("@") && passwordState.value.trim().length > 7)
  } 

  const passwordChangeHandler = (e) => {
    dispatchPassword({
      type: 'USER_INPUT_PASSWORD',
      value: e.target.value,
      isValid: e.target.value.trim().length > 7
    }) 
    setFormIsValid(emailState.isValid && e.target.value.trim().length > 7)
  } 

  const validateEmailHandler = (e) => {
    dispatchEmail({
      type: 'BLUR'
    }) 
  } 

  const validatePasswordHandler = () => {
    dispatchPassword({
      type: 'BLUR'
    }) 
  } 

  const submitHandler = (event) => {
    event.preventDefault() 
    props.onLogin(emailState.value, passwordState.value) 
  } 

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles.control} ${
            emailState.isValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${styles.control} ${
            passwordState.isValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={styles.actions}>
          <Button type="submit" className={styles.btn} disabled={!formIsValid}>
            Вход
          </Button>
        </div>
      </form>
    </Card>
  ) 
} 

export default Login 
