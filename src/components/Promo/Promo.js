import './Promo.css';
import promoBackground from '../../images/promoBackground.svg';

function Promo(props) {
  return (
    <section className="promo">
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <img className="promo__background" src={promoBackground} alt="Буква П в квадрате" />
    </section>
  );
}

export default Promo;
