import { Link } from 'react-router-dom';
import './Portfolio.css';

function Portfolio(props) {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__container">
        <li className="portfolio__item">
          <Link to="https://github.com/MariaFet/how-to-learn" className="portfolio__link" target="_blank">Статичный сайт<span className="portfolio__link-arrow">&#8599;</span></Link>
        </li>
        <li className="portfolio__item">
          <Link to="https://mariafet.github.io/russian-travel/" className="portfolio__link" target="_blank">Адаптивный сайт<span className="portfolio__link-arrow">&#8599;</span></Link>
          </li>
        <li className="portfolio__item">
          <Link to="https://mesto.bymaria.nomoreparties.co/sign-in" className="portfolio__link" target="_blank">Одностраничное приложение<span className="portfolio__link-arrow">&#8599;</span></Link>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
