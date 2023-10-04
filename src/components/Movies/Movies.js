import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Preloader from '../Preloader/Preloader.js';
import React from 'react';

function Movies (props) {
  const [values, setValues] = React.useState(JSON.parse(localStorage.getItem('search-query')) || {search: '', shortMovie: false});
  function searchMovies (values) {
    setValues(values);
    props.onSearch(values);
    //.then((res) => setValues(values));
    //localStorage.setItem('search-query', JSON.stringify(values));
  }
  function filterMovies (values) {
    const newValues = { ...values, shortMovie: !values.shortMovie};
    setValues(newValues);
    props.onFilter(newValues);
    //localStorage.setItem('search-query', JSON.stringify(newValues));
  }

  React.useEffect(() => {
    localStorage.setItem('search-query', JSON.stringify({search: values.search, shortMovie: values.shortMovie}));
  }, [values])


  return (
    <main className="movies">
      <SearchForm onSearch={searchMovies} onFilter={filterMovies} isLoading={props.isLoading} defaultValues={values} />
      {props.isLoading ?
        <Preloader /> :
        <MoviesCardList movies={props.movies} savedMovies={props.savedMovies} toggleAddMovie={props.toggleAddMovie} deleteMovie={props.deleteMovie} filteredMovies={props.foundMovies} />}
    </main>
  );
}

export default Movies;