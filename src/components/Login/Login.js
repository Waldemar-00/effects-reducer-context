import React, { useReducer, useContext} from "react" 
import Card from "../UI/Card/Card" 
import styles from "./Login.module.css" 
import Input from "../UI/input/Input"
import Button from "../UI/Button/Button" 
import Authenticator from "../../context/Authenticator"

const Login = () => {
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
    if (formState.isMailValid) {
      globalContext.onLogin(formState.mailValue, formState.passwordValue)
    }

  } 

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <Input changeHandler={emailChangeHandler}
          validateHandler={validateEmailHandler}
          value={formState.mailValue}
          isValid={formState.isMailValid}
          type="email"
          id="email"
          name='email'
          required
          autoComplete="username"
        />
        <Input changeHandler={passwordChangeHandler}
          validateHandler={validatePasswordHandler}
          value={formState.passwordValue}
          isValid={formState.isPasswordValid}
          type="password"
          id="password"
          name='password'
          required
          autoComplete="password"
        />
        <div className={styles.actions}>
          <Button type="submit" className={styles.btn}>
            Вход
          </Button>
        </div>
      </form>
    </Card>
  ) 
} 

export default Login 
