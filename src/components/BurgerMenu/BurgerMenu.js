import menuClose from '../../images/menuClose.svg';
import { Link, NavLink } from 'react-router-dom';
import './BurgerMenu.css';

function BurgerMenu (props) {
  return (
    <section className={`menu ${props.isOpen ? 'menu_opened' : ''}`}>
      <div className="menu__content">
        <button className="menu__close-button">
          <img className="menu__close-button-image" src={menuClose} alt="Кнопка закрыть" />
        </button>
        <nav className="menu__links">
          <NavLink className={({isActive}) => ("menu__link" + (isActive ? " menu__link_active" : ""))} to="/">Главная</NavLink>
          <NavLink className={({isActive}) => ("menu__link" + (isActive ? " menu__link_active" : ""))} to="/movies">Фильмы</NavLink>
          <NavLink className={({isActive}) => ("menu__link" + (isActive ? " menu__link_active" : ""))} to="/saved-movies">Сохраненные фильмы</NavLink>
          <Link className="menu__link menu__link_type_account" to="/profile">Аккаунт</Link>
        </nav>
      </div>
    </section>
  );
}

export default BurgerMenu;
