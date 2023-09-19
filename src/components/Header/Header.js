import headerLogo from '../../images/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu.js';
import BurgerButton from '../BurgerButton/BurgerButton.js';

function Header(props) {
  return (
    <header className={`header ${props.isMain ? "header_color_blue" : "header_color_white"}`}>
      <Link to="/">
        <img className="header__logo" alt="Логотип проекта" src={headerLogo}/>
      </Link>
      {props.isLoggedIn ?
      <>
      <div className="header__button-container">
        <NavLink to="/movies" className={({isActive}) => (`header__button ${props.isMain ? "" : "header__button_color_black"}` + (isActive ? " header__button_active" : ""))}>Фильмы</NavLink>
        <NavLink to="/saved-movies" className={({isActive}) => (`header__button ${props.isMain ? "" : "header__button_color_black"}` + (isActive ? " header__button_active" : ""))}>Сохраненные фильмы</NavLink>
      </div>
      <Link to="/profile" className="header__button-account">Аккаунт</Link>
      <BurgerButton />
      <BurgerMenu />
      </>
      :
      <div className="header__button-box">
        <Link to="/sign-up" className="header__button">Регистрация</Link>
        <Link to="/sign-in"><button className="header__button-signin">Войти</button></Link>
        </div>}
    </header>
  );
}

export default Header;
