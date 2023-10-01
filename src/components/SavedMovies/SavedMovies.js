import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';
import React from 'react';
import Preloader from '../Preloader/Preloader.js';

function SavedMovies (props) {

  const [values, setValues] = React.useState(localStorage.getItem('search-query') || {search: '', shortMovies: false});
  function searchMovies (values) {
    props.onSearch(values);
    //.then((res) => setValues(values));
  }
  function filterMovies (someValues) {
    const newValues = { ...values, shortMovie: someValues.shortMovies};
    props.onFilter(newValues);
    setValues(newValues);
  }

  return (
    <main className="SavedMovies">
      <SearchForm onSearch={searchMovies} setBack={props.setBack} onFilter={filterMovies} default={values} isLoading={props.isLoading} />
      {props.isLoading ?
        <Preloader /> :
        <MoviesCardList movies={props.movies} deleteMovie={props.deleteMovie} savedMovies={props.savedMovies} />}
    </main>
  );
}

export default SavedMovies;