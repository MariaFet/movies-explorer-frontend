import profilePicture from '../../images/profilePicture.jpg';
import { Link } from 'react-router-dom';
import './AboutMe.css';

function AboutMe(props) {
  return (
    <section className="student" id="about-student">
      <div className="student__container">
        <h2 className="student__title">Студент</h2>
      </div>
      <div className="student__wrapper">
        <div className="student__box">
          <p className="student__name">Мария</p>
          <p className="student__job">Студент Yandex Praktikum, 29 лет</p>
          <p className="student__info">Живу в Калуге. Окончила факультет иностранных языков, говорю на английском и французском языках. Очень люблю проводить время на свежем воздухе. Увлекаюсь фитнесом, особенно нравится тай-бо. Раньше работала логистом на заводе Пежо-Ситроен-Митсубиши, а сейчас изучаю веб-разработку. Надеюсь, что скоро она станет моей профессией.</p>
          <Link to="https://github.com/MariaFet" target="_blank" className="student__link">Github</Link>
        </div>
        <img className="student__picture" src={profilePicture} alt="Фото студента"/>
      </div>
    </section>
  );
}

export default AboutMe;
