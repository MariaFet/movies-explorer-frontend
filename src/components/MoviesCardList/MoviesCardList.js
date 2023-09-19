import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import pic1 from '../../images/moviesPics/moviePic (1).svg';
import pic2 from '../../images/moviesPics/moviePic (2).svg';
import pic3 from '../../images/moviesPics/moviePic (3).svg';
import pic4 from '../../images/moviesPics/moviePic (4).svg';
import pic5 from '../../images/moviesPics/moviePic (5).svg';
import pic6 from '../../images/moviesPics/moviePic (6).svg';
import pic7 from '../../images/moviesPics/moviePic (7).svg';

function MoviesCardList (props) {
  return (
    <section className="movies-list">
      {props.moviesCards}
      <MoviesCard thumbnail={pic1} nameRU="33 слова о дизайне" duration="1ч42мин"/>
      <MoviesCard thumbnail={pic2} nameRU="33 слова о дизайне" duration="1ч42мин"/>
      <MoviesCard thumbnail={pic3} nameRU="33 слова о дизайне" duration="1ч42мин"/>
      <MoviesCard thumbnail={pic4} nameRU="33 слова о дизайне" duration="1ч42мин"/>
      <MoviesCard thumbnail={pic5} nameRU="33 слова о дизайне" duration="1ч42мин"/>
      <MoviesCard thumbnail={pic6} nameRU="33 слова о дизайне" duration="1ч42мин"/>
      <MoviesCard thumbnail={pic7} nameRU="33 слова о дизайне" duration="1ч42мин"/>

      <button className="movies-list__show-more">Ещё</button>
    </section>
  );
}

export default MoviesCardList;