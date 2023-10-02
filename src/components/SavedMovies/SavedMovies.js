import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';
import React from 'react';
import Preloader from '../Preloader/Preloader.js';
import { searchMoviesByKeyWord, filterMoviesByDuration } from '../../utils/filter.js';
import InfoToolTip from '../InfoToolTip/InfoToolTip.js';

function SavedMovies (props) {

  const [values, setValues] = React.useState({search: '', shortMovie: false});
  const [savedMovies, setSavedMovies] = React.useState(JSON.parse(localStorage.getItem('saved-movies')));

  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = React.useState(false);
  const [isSuccessInfoToolTipStatus, setIsSuccessInfoToolTipStatus] = React.useState(false);
  const [infoText, setInfoText] = React.useState('');

  function searchInSavedMovies (values) {
    const currentMovies = JSON.parse(localStorage.getItem('saved-movies'));
    let filteredSavedMovies = searchMoviesByKeyWord(currentMovies, values.search);
    if (filteredSavedMovies.length === 0) {
      setInfoText('Ничего не найдено');
      setIsInfoToolTipOpen(true);
      setIsSuccessInfoToolTipStatus(false);
    }
      setSavedMovies(filteredSavedMovies);
      setValues(values);
  }

  function filterSavedMovies (values) {
    const movies = JSON.parse(localStorage.getItem('saved-movies'));
    let filteredMovies = searchMoviesByKeyWord(movies, values.search);
    const newMovies = values.shortMovie ? filteredMovies : filterMoviesByDuration(filteredMovies);
    if (newMovies.length === 0) {
      setInfoText('Ничего не найдено');
      setIsInfoToolTipOpen(true);
      setIsSuccessInfoToolTipStatus(false);
      //setSavedMovies(movies);
    }
      setSavedMovies(newMovies);
      setValues(values);
  }

  function closeInfoToolTip () {
    setIsInfoToolTipOpen(false);
  }

  function deleteMovie (movie) {
    return props.deleteMovie(movie)
    .then((savedMovie) => {
      const newMovies = savedMovies.filter((m) => m.movieId !== movie.movieId);
      setSavedMovies(newMovies);
      localStorage.setItem('saved-movies', JSON.stringify(newMovies));
    })
    .catch(err => console.log(err));
  }

  /*React.useEffect(() => {
    localStorage.setItem('saved-movies', JSON.stringify(savedMovies));
  }, [savedMovies])*/

  return (
    <main className="SavedMovies">
      <SearchForm onSearch={searchInSavedMovies} onFilter={filterSavedMovies} savedMovies={savedMovies} default={values} isLoading={props.isLoading} />
      {props.isLoading ?
        <Preloader /> :
        <MoviesCardList movies={savedMovies} deleteMovie={deleteMovie} savedMovies={props.savedMovies} />}
        <InfoToolTip isInfoToolTipOpen={isInfoToolTipOpen} isSuccessInfoToolTipStatus={isSuccessInfoToolTipStatus} infoText={infoText} onClose={closeInfoToolTip} />
    </main>
  );
}

export default SavedMovies;