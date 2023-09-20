import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Register.css';

function Register(props) {
  return (
    <section className="register">
      <Link className="register__logo-link" to="/"><img className="register__logo" src={logo} alt="Логотип"/></Link>
      <h1 className="register__welcome">Добро пожаловать!</h1>
      <form className="register__form" noValidate>
        <label htmlFor="name" className="register__input-label">Имя</label>
        <input id="name" className="register__input" type="text" required></input>
        <label htmlFor="email" className="register__input-label">E-mail</label>
        <input id="email" className="register__input" type="email" required></input>
        <label htmlFor="password" className="register__input-label">Пароль</label>
        <input id="password" className="register__input register__input_type_password" type="password" required></input>
        <p className="register__error">{props.errorMessage}</p>
        <input type="submit" value="Зарегистрироваться" className="register__submit-button"></input>
      </form>
      <p className="register__login-redirect">Уже зарегистрированы? <Link to="/sign-in" className="register__link">Войти</Link></p>
    </section>
  );
}

export default Register;
