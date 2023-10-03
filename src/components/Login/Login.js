import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Login.css';
import React from 'react';
import { useFormWithValidation } from '../../utils/Validation.js';

function Login(props) {
  const [isSuccessfulMessage, setIsSuccessfulMessage] = React.useState('');
  const { values, handleChange, resetForm, isValid } = useFormWithValidation();

  function handleSubmit (e) {
    e.preventDefault();
    return props.onSubmit({email: values.email, password: values.password})
    .then((res) => {
      resetForm();
    //setIsSuccessfulMessage('Авторизация прошла успешно');
    })
    .catch((err) => {
      if (err === 401) {
        setIsSuccessfulMessage('Вы ввели неправильный логин или пароль');
      } else if (err === 400) {
        setIsSuccessfulMessage('При авторизации произошла ошибка. Переданный токен некорректен');
      } else if (err === 404) {
        setIsSuccessfulMessage('При авторизации произошла ошибка. Токен не передан или передан не в том формате');
      } else {
      setIsSuccessfulMessage('Что-то пошло не так');
      }
      console.log(err);
    });
  }
  return (
    <section className="login">
      <Link className="login__logo-link" to="/"><img className="login__logo" src={logo} alt="Логотип"/></Link>
      <h1 className="login__welcome">Рады видеть!</h1>
      <form className="login__form" noValidate onSubmit={handleSubmit}>
        <label htmlFor="email" className="login__input-label">E-mail</label>
        <input id="email" name="email" className="login__input" type="email" required onChange={handleChange} value={values.email || ''} pattern="^[\w]+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$"></input>
        <label htmlFor="password" className="login__input-label">Пароль</label>
        <input id="password" name="password" className="login__input login__input_type_password" type="password" required onChange={handleChange} value={values.password || ''}></input>
        <p className="login__error">{isSuccessfulMessage}</p>
        <input type="submit" value="Войти" className="login__submit-button" disabled={!isValid ? true : false}></input>
      </form>
      <p className="login__register-redirect">Еще не зарегистрированы? <Link to="/sign-up" className="login__link">Регистрация</Link></p>
    </section>
  );
}

export default Login;
