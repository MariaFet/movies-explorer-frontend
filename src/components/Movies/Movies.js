import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Preloader from '../Preloader/Preloader.js';
import React from 'react';

function Movies (props) {
  const [values, setValues] = React.useState(localStorage.getItem('search-query') || {search: '', shortMovies: false});
  function searchMovies (values) {
    props.onSearch(values)
    .then((res) => setValues(values));
  }
  function filterMovies (someValues) {
    const newValues = { ...values, shortMovie: someValues.shortMovies};
    props.onFilter(newValues);
    setValues(newValues);
  }

  return (
    <main className="movies">
      <SearchForm onSearch={searchMovies} onFilter={filterMovies} isLoading={props.isLoading} />
      {props.isLoading ?
        <Preloader /> :
        <MoviesCardList movies={props.movies} savedMovies={props.savedMovies} toggleAddMovie={props.toggleAddMovie} deleteMovie={props.deleteMovie} />}
    </main>
  );
}

export default Movies;