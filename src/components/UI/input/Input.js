import styles from './Input.module.css'

function Input(
  {
    changeHandler,
    validateHandler,
    value,
    isValid,
    type,
    id,
    name,
    required,
    autoComplete,
  }) {

  return (
    <div
      className={`${styles.control} ${isValid === false ? styles.invalid : ""
        }`}
    >
      <label htmlFor="email">{name}</label>
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        autoComplete={autoComplete}
        value={value}
        onInput={changeHandler}
        onBlur={validateHandler}
      />
    </div>
  )
}
export default Input

















