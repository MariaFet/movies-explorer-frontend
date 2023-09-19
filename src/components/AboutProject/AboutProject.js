import './AboutProject.css';

function AboutProject(props) {
  return (
    <section className="description" id="about-project">
      <div className="description__title-container">
        <h2 className="description__title">О проекте</h2>
      </div>
      <div className="description__wrapper">
        <div className="description__container">
          <p className="description__item-title">Дипломный проект включал 5 этапов</p>
          <p className="description__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="description__container">
          <p className="description__item-title">На выполнение диплома ушло 5 недель</p>
          <p className="description__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="description__timeline">
        <div className="description__block description__block_type_back">
          <div className="description__period description__period_type_back">
            <p className="description__text">1 неделя</p>
          </div>
          <p className="description__text description__text_light">Back-end</p>
        </div>
        <div className="description__block description__block_type_front">
          <div className="description__period description__period_type_front">
            <p className="description__text">4 недели</p>
          </div>
          <p className="description__text description__text_light">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
