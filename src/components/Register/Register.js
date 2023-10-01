import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Register.css';
import React from 'react';
import { useFormWithValidation } from '../../utils/Validation.js';

function Register(props) {
  const [isSuccessfulMessage, setIsSuccessfulMessage] = React.useState('');

  const { values, handleChange, isValid, resetForm } = useFormWithValidation();
  
  function handleSubmit (e) {
    e.preventDefault();
    props.onSubmit ({name: values.name, email: values.email, password: values.password})
    .then((res) => {
      resetForm();
    })
    .catch((err) => {
      if (err === 409) {
        setIsSuccessfulMessage('Пользователь с таким email уже существует');
      } else {
        setIsSuccessfulMessage('При регистрации пользователя произошла ошибка');
      }
      console.log(err);
    })
  }
  
  return (
    <section className="register">
      <Link className="register__logo-link" to="/"><img className="register__logo" src={logo} alt="Логотип"/></Link>
      <h1 className="register__welcome">Добро пожаловать!</h1>
      <form className="register__form" noValidate onSubmit={handleSubmit}>
        <label htmlFor="name" className="register__input-label">Имя</label>
        <input id="name" className="register__input" type="text" pattern="[а-яА-Яa-zA-ZёЁ\- ]{2,30}" required name="name" onChange={handleChange} value={values.name || ''} minLength="2" maxLength="30"></input>
        <label htmlFor="email" className="register__input-label">E-mail</label>
        <input id="email" className="register__input" type="email" pattern="^[\w]+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$" required name="email" onChange={handleChange} value={values.email || ''}></input>
        <label htmlFor="password" className="register__input-label">Пароль</label>
        <input id="password" className="register__input register__input_type_password" type="password" required name="password" onChange={handleChange} value={values.password || ''}></input>
        <p className="register__error">{isSuccessfulMessage}</p>
        <input type="submit" value="Зарегистрироваться" className="register__submit-button" disabled={!isValid ? true : false}></input>
      </form>
      <p className="register__login-redirect">Уже зарегистрированы? <Link to="/sign-in" className="register__link">Войти</Link></p>
    </section>
  );
}

export default Register;
