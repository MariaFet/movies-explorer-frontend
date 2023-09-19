import { Link } from 'react-router-dom';
import './Footer.css';

function Footer(props) {
  return (
    <footer className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <hr className="footer__line" />
      <div className="footer__container">
        <p className="footer__copyright">&#169; {new Date().getFullYear()}</p>
        <nav className="footer__links">
          <Link to="https://practicum.yandex.ru/" className="footer__link" target="_blank">Яндекс.Практикум</Link>
          <Link to="https://github.com/" className="footer__link" target="_blank">Github</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
