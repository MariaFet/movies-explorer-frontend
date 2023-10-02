import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard (props) {
  const { pathname } = useLocation();

  function convertTime (duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    if (hours === 0) {
      return `${minutes}м`
    }
    return `${hours}ч ${minutes}м`
  }

  function handleToggleAddMovie () {
    props.toggleAddMovie(props.movie);
    console.log(props.savedMovies);
    setIsSaved(!isSaved);
  }

  function handleDeleteMovie () {
    props.deleteMovie(props.movie);
    console.log(props.savedMovies);
  }
  
  const [isSaved, setIsSaved] = React.useState(props.savedMovies.some((savedMovie) => {return savedMovie.movieId === props.movie.id}))
  
React.useEffect(() => {
  setIsSaved(props.savedMovies.some((savedMovie) => savedMovie.movieId === props.movie.id));
}, [props.savedMovies, props.movie.id])
  return (
    <div className="card">
      <Link to={props.movie.trailerLink} target="_blank">
        <img className="card__image" src={props.movie.image.formats ? ('https://api.nomoreparties.co/' + props.movie.image.formats.thumbnail.url) : props.movie.image} alt={props.movie.nameRU}/>
      </Link>
      <div className="card__info">
        <p className="card__name">{props.movie.nameRU}</p>
        {pathname === "/movies" ? <input className="card__button" type="checkbox" checked={isSaved} onChange={handleToggleAddMovie} /> 
        : <button className="card__delete" onClick={handleDeleteMovie} />}
      </div>
      <p className="card__duration">{convertTime(props.movie.duration)}</p>
    </div>
  );
}

export default MoviesCard;
