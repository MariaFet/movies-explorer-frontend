import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Login.css';

function Login(props) {
  return (
    <section className="login">
      <Link className="login__logo-link" to="/"><img className="login__logo" src={logo} alt="Логотип"/></Link>
      <h1 className="login__welcome">Рады видеть!</h1>
      <form className="login__form" noValidate>
        <label htmlFor="email" className="login__input-label">E-mail</label>
        <input id="email" className="login__input" type="email" required></input>
        <label htmlFor="password" className="login__input-label">Пароль</label>
        <input id="password" className="login__input login__input_type_password" type="password" required></input>
        <input type="submit" value="Войти" className="login__submit-button"></input>
      </form>
      <p className="login__register-redirect">Еще не зарегистрированы? <Link to="/sign-up" className="login__link">Регистрация</Link></p>
    </section>
  );
}

export default Login;
