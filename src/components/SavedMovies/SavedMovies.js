import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';

function SavedMovies (props) {
  return (
    <main className="SavedMovies">
      <SearchForm/>
      <MoviesCardList/>
    </main>
  );
}

export default SavedMovies;