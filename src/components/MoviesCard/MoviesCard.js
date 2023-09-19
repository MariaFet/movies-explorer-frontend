import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard (props) {
  const { pathname } = useLocation();

  return (
    <div className="card">
      <img className="card__image" src={props.thumbnail} alt={props.nameRU}/>
      <div className="card__info">
        <p className="card__name">{props.nameRU}</p>
        {pathname === "/movies" ? <input className="card__button" type="checkbox" /> 
        : <button className="card__delete" />}
      </div>
      <p className="card__duration">{props.duration}</p>
    </div>
  );
}

export default MoviesCard;
