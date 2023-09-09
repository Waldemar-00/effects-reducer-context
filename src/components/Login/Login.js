import React, { useState, useReducer, useEffect, useContext} from "react" 

import Card from "../UI/Card/Card" 
import styles from "./Login.module.css" 
import Button from "../UI/Button/Button" 
import Authenticator from "../../context/Authenticator"

const Login = () => {
  const [formIsValid, setFormIsValid] = useState(false) 

  const [formState, dispatchForm] = useReducer((prevState, action) => {
    switch (action.type) {
      case 'USER_INPUT_MAIL':
        return {
          ...prevState,
          mailValue: action.mailValue,
          isMailValid: action.isMailValid,
        }
      case 'USER_INPUT_PASSWORD': return {
        ...prevState,
        passwordValue: action.passwordValue,
        isPasswordValid: action.isPasswordValid,
      }
      case 'BLUR_MAIL': return {
        ...prevState,
        mailValue: prevState.mailValue,
        isMailValid: prevState.isMailValid,
      }
      case 'BLUR_PASSWORD': return {
        ...prevState,
        passwordValue: prevState.passwordValue,
        isPasswordValid: prevState.isPasswordValid,
      }
      default: return {
        mailValue: '',
        passwordValue: '',
        isMailValid: false,
        isPasswordValid: false,
      }
    }
  }, { mailValue: '', isMailValid: undefined, passwordValue: '', isPasswordValid: undefined })
  
  useEffect(() => {
    setFormIsValid(formState.isMailValid && formState.isPasswordValid)
  }, [formState.isMailValid, formState.isPasswordValid])

  const emailChangeHandler = (e) => {
    dispatchForm({
      type: 'USER_INPUT_MAIL',
      mailValue: e.target.value,
      isMailValid: e.target.value.includes('@')
    }) 
  } 

  const passwordChangeHandler = (e) => {
    dispatchForm({
      type: 'USER_INPUT_PASSWORD',
      passwordValue: e.target.value,
      isPasswordValid: e.target.value.trim().length > 7
    }) 
  } 

  const validateEmailHandler = () => {
    dispatchForm({
      type: 'BLUR_MAIL'
    }) 
  } 

  const validatePasswordHandler = () => {
    dispatchForm({
      type: 'BLUR_PASSWORD'
    }) 
  } 
  const globalContext = useContext(Authenticator)
  const submitHandler = (event) => {
    event.preventDefault() 
    globalContext.onLogin(formState.mailValue, formState.passwordValue) 
  } 

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles.control} ${
            formState.isMailValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name='email'
            required
            autoComplete="username"
            value={formState.mailValue}
            onInput={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${styles.control} ${
            formState.isPasswordValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            name='password'
            required
            autoComplete="current-password"
            value={formState.passwordValue}
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
