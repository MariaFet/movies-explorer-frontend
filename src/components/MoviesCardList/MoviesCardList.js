import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import React from 'react';

function MoviesCardList (props) {
  const [displayedMovies, setDisplayedMovies] = React.useState(0);
  const moviesList = props.movies.slice(0, displayedMovies);


  function handleDisplayedMovies () {
    if (window.innerWidth >= 1280) {
      setDisplayedMovies(16);
    } else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
      setDisplayedMovies(8);
    } else {
      setDisplayedMovies(5);
    }
  }

  function handleMoreDisplayedMovies () {
      if (window.innerWidth >= 1280) {
      setDisplayedMovies(displayedMovies + 4);
    } else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
      setDisplayedMovies(displayedMovies + 2);
    } else {
      setDisplayedMovies(displayedMovies + 2);
    }
  }

  React.useEffect(() => {
    handleDisplayedMovies();
  }, [props.movies])


  
  return (
    <section className="movies-list">
      {moviesList.map((movie) =>
        <MoviesCard movie={movie} key={movie.id || movie.movieId} toggleAddMovie={props.toggleAddMovie} deleteMovie={props.deleteMovie} savedMovies={props.savedMovies} />)}
      <button className={`movies-list__show-more ${props.movies.length === moviesList.length ? "movies-list__show-more_hidden" : ""}`} onClick={handleMoreDisplayedMovies}>Ещё</button>
    </section>
  );
}

export default MoviesCardList;