import menuClose from '../../images/menuClose.svg';
import { Link, NavLink } from 'react-router-dom';
import './BurgerMenu.css';

function BurgerMenu (props) {
  return (
    <section className={`menu ${props.isMenuOpened ? 'menu_opened' : ''}`}>
      <div className="menu__content">
        <button className="menu__close-button" onClick={props.onClose}>
          <img className="menu__close-button-image" src={menuClose} alt="Кнопка закрыть" />
        </button>
        <nav className="menu__links">
          <NavLink className={({isActive}) => ("menu__link" + (isActive ? " menu__link_active" : ""))} to="/" onClick={props.onClose}>Главная</NavLink>
          <NavLink className={({isActive}) => ("menu__link" + (isActive ? " menu__link_active" : ""))} to="/movies" onClick={props.onClose}>Фильмы</NavLink>
          <NavLink className={({isActive}) => ("menu__link" + (isActive ? " menu__link_active" : ""))} to="/saved-movies" onClick={props.onClose}>Сохраненные фильмы</NavLink>
          <Link className="menu__link menu__link_type_account" to="/profile" onClick={props.onClose}>Аккаунт</Link>
        </nav>
      </div>
    </section>
  );
}

export default BurgerMenu;
