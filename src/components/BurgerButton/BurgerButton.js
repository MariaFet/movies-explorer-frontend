import burgerButtonBlack from '../../images/burgerButtonBlack.svg';
import burgerButtonWhite from '../../images/burgerButtonWhite.svg';
import './BurgerButton.css';
import { useLocation } from 'react-router-dom';

function BurgerMenuButton (props) {
  const { pathname } = useLocation();
  return (
    <button className="header__menu-button" onClick={props.onOpen}>
      <img className="header__menu-button-image" src={pathname === '/' ? burgerButtonWhite : burgerButtonBlack} alt="Кнопка меню" />
    </button>
  );
}

export default BurgerMenuButton;
