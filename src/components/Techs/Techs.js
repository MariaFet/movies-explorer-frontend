import './Techs.css';

function Techs(props) {
  return (
    <section className="technologies" id="technologies">
      <div className="technologies__container">
        <h2 className="technologies__title">Технологии</h2>
      </div>
      <h3 className="technologies__header">7 технологий</h3>
      <p className="technologies__paragraph">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <div className="technologies__list">
        <div className="technologies__item">
          <p className="technologies__text">HTML</p>
          </div>
          <div className="technologies__item">
            <p className="technologies__text">CSS</p>
          </div>
          <div className="technologies__item">
            <p className="technologies__text">JS</p>
          </div>
          <div className="technologies__item">
            <p className="technologies__text">React</p>
          </div>
          <div className="technologies__item">
            <p className="technologies__text">Git</p>
          </div>
          <div className="technologies__item">
            <p className="technologies__text">Express.js</p>
          </div>
          <div className="technologies__item">
            <p className="technologies__text">mongoDB</p>
          </div>
        </div>
    </section>
  );
}

export default Techs;
