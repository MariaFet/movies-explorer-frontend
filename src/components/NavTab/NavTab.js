import './NavTab.css';

function NavTab(props) {
  return (
    <section className="navigation">
      <nav className="navigation__container">
        <a href="#about-project" className="navigation__link">О проекте</a>
        <a href="#technologies" className="navigation__link">Технологии</a>
        <a href="#about-student" className="navigation__link">Студент</a>
        </nav>
    </section>
  );
}

export default NavTab;
