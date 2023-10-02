import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

function MoviesCardList (props) {
  const [displayedMovies, setDisplayedMovies] = React.useState(0);
  let moviesList = props.movies.slice(0, displayedMovies);

  const {pathname} = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (pathname === '/saved-movies') {
      moviesList = props.savedMovies.slice(0, displayedMovies);
    } else {
      moviesList = props.filteredMovies.slice(0, displayedMovies);
    }
  }, [navigate])

  function handleDisplayedMovies () {
    if (window.innerWidth > 1279) {
      setDisplayedMovies(16);
    } else if (window.innerWidth > 989) {
      setDisplayedMovies(9);
    } else if (window.innerWidth > 767) {
      setDisplayedMovies(8);
    } else {
      setDisplayedMovies(5);
    }
  }

  function handleMoreDisplayedMovies () {
      if (window.innerWidth > 1279) {
      setDisplayedMovies(displayedMovies + 4);
    } else if (window.innerWidth > 989) {
      setDisplayedMovies(displayedMovies + 3)
    } else if (window.innerWidth > 767) {
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