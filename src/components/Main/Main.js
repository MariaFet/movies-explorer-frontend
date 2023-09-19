import Promo from '../Promo/Promo.js';
import NavTab from '../NavTab/NavTab.js';
import AboutProject from '../AboutProject/AboutProject.js';
import AboutMe from '../AboutMe/AboutMe.js';
import Techs from '../Techs/Techs.js';
import Portfolio from '../Portfolio/Portfolio.js';

function Main (props) {
  return (
    <main className="main">
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  );
}

export default Main;
