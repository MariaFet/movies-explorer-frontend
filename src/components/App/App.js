import React from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import PageNotFound from '../PageNotFound/PageNotFound.js';
import './App.css';
import * as auth from '../../utils/Auth.js';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute.js';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import mainApi from '../../utils/MainApi.js';
import moviesApi from '../../utils/MoviesApi.js';
import InfoToolTip from '../InfoToolTip/InfoToolTip.js';
import { searchMoviesByKeyWord, filterMoviesByDuration } from '../../utils/filter.js';

function App() {
  const { pathname } = useLocation();
  const [isLoggedIn, setIsLoggedIn] = React.useState(localStorage.getItem('loggedIn') || false);
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    email: '',
    _id: null,
  })

  const navigate = useNavigate();

  React.useEffect(() => {
      const userId = localStorage.getItem('userId');
      if (userId) {
        auth.checkToken(userId)
        .then((res) => {
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
        });
      }
  }, [navigate])



  function handleSignIn ({email, password}) {
    return auth.signIn({email, password})
    .then((data) => {
      setIsLoggedIn(true);
      localStorage.setItem('loggedIn', true);
      navigate('/movies', {replace: true});
    })
  }

  function handleSignUp ({name, email, password}) {
    return auth.signUp({name, email, password})
    .then((res) => {
      handleSignIn({email, password});
      navigate('/movies', {replace: true});
    })
  }

  function handleSignOut () {
    localStorage.clear();
    navigate('/', {replace: true});
    setIsLoggedIn(false);
    setCurrentUser({
      name: '',
      email: '',
      _id: '',
    });
    setMovies([]);
    setSavedMovies([]);
  }

  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = React.useState(false);
  const [isSuccessInfoToolTipStatus, setIsSuccessInfoToolTipStatus] = React.useState(false);
  const [infoText, setInfoText] = React.useState('');

  function searchMoviesUpdate (values) {
    const movies = JSON.parse(localStorage.getItem('movies'));
    //localStorage.setItem('filteredMovies', searchMoviesByKeyWord(allMovies, JSON.parse(localStorage.getItem('search-query')).search));
    let filteredMovies = searchMoviesByKeyWord(movies, JSON.parse(localStorage.getItem('search-query')).search);
    localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
    console.log(filteredMovies);
    if (filteredMovies.length === 0) {
      setInfoText('Ничего не найдено');
      setIsInfoToolTipOpen(true);
      setIsSuccessInfoToolTipStatus(false);
    }
      setMovies(filteredMovies);
  }

  function filterMovie (values) {
    const movies = JSON.parse(localStorage.getItem('movies'));
    let filteredMovies = searchMoviesByKeyWord(movies, JSON.parse(localStorage.getItem('search-query')).search);
    const newMovies = JSON.parse(localStorage.getItem('search-query')).shortMovie ? filteredMovies : filterMoviesByDuration(filteredMovies);
    if (newMovies.length === 0) {
      setInfoText('Ничего не найдено');
      setIsInfoToolTipOpen(true);
      setIsSuccessInfoToolTipStatus(false);
    }
      setMovies(newMovies);
  }

  function searchMovie(values) {
    setIsLoading(true);
    return moviesApi.getMovies()
    .then((res) => {
      localStorage.setItem('movies', JSON.stringify(res));
      searchMoviesUpdate(values);
    })
    //.catch(err => console.log(err))
    .finally(() => setIsLoading(false))
  }

  function searchInSavedMovies (values) {
    const currentMovies = JSON.parse(localStorage.getItem('saved-movies'));
    let filteredSavedMovies = searchMoviesByKeyWord(currentMovies, JSON.parse(localStorage.getItem('search-query')).search);
    //localStorage.setItem('filteredSavedMovies', JSON.stringify(filteredSavedMovies));
    if (filteredSavedMovies.length === 0) {
      setInfoText('Ничего не найдено');
      setIsInfoToolTipOpen(true);
      setIsSuccessInfoToolTipStatus(false);
    }
      setSavedMovies(filteredSavedMovies);
  }

  function filterSavedMovies (values) {
    const movies = JSON.parse(localStorage.getItem('saved-movies'));
    let filteredMovies = searchMoviesByKeyWord(movies, JSON.parse(localStorage.getItem('search-query')).search);
    const newMovies = JSON.parse(localStorage.getItem('search-query')).shortMovie ? filteredMovies : filterMoviesByDuration(filteredMovies);
    if (newMovies.length === 0) {
      setInfoText('Ничего не найдено');
      setIsInfoToolTipOpen(true);
      setIsSuccessInfoToolTipStatus(false);
      //setSavedMovies(movies);
    }
      setSavedMovies(newMovies);
  }

  function toggleAddMovie (movie) {
    const isSaved = savedMovies.some((m) => m.movieId === movie.id);
    console.log(isSaved);
    if (!isSaved) {
      return mainApi.saveMovie({
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        movieId: movie.id,
        image: 'https://api.nomoreparties.co' + movie.image.formats.thumbnail.url,
        trailerLink: movie.trailerLink,
        duration: movie.duration,
        director: movie.director,
        country: movie.country,
        year: movie.year,
        description: movie.description,
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
        owner: currentUser._id,
      })
      .then((savedMovie) => {
        setSavedMovies([savedMovie, ...savedMovies]);
        return localStorage.setItem('saved-movies', JSON.stringify(savedMovies));
      })
      .catch((err) => console.log(err));
    } else {
      return mainApi.deleteMovie(movie.id)
      .then((res) => {
        setSavedMovies(savedMovies.filter((m) => m.movieId !== movie.id));
        return localStorage.setItem('saved-movies', JSON.stringify(savedMovies));
      })
      .catch((err) => console.log(err));
    }
  }

  /*React.useEffect(() => {
    localStorage.setItem('saved-movies', JSON.stringify(savedMovies));
  }, [toggleAddMovie, deleteMovie]);*/
  
  React.useEffect(() => {
    if (isLoggedIn) {
      mainApi.getUserInfo()
      .then((res) => {
        setCurrentUser({name: res.data.name, email: res.data.email});
        setIsLoading(true);
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
    }
  }, [isLoggedIn])

  React.useEffect(() => {
    if (isLoggedIn) {
      mainApi.getSavedMovies()
      .then((res) => {
        setSavedMovies(res);
        setIsLoading(true);
        localStorage.setItem('saved-movies', JSON.stringify(res));
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
    }
  }, [isLoggedIn])

  function closeInfoToolTip () {
    setIsInfoToolTipOpen(false);
  }

  function deleteMovie (movie) {
    return mainApi.deleteMovie (movie.movieId)
    .then((savedMovie) => {
      const newMovies = savedMovies.filter((m) => m.movieId !== movie.movieId);
      setSavedMovies(newMovies);
      localStorage.setItem('saved-movies', JSON.stringify(newMovies));
    })
    .catch(err => console.log(err));
  }




  function handleUpdateUser (data) {
    return mainApi.editUserInfo(data)
    .then((res) => {
      setCurrentUser({name: res.user.name, email: res.user.email});
    })
    //.catch(err => console.log(err))
  }

React.useEffect (() => {
  if (isLoggedIn && pathname === '/sign-in') {
    return navigate('/');
  } else if (isLoggedIn && pathname === '/sign-up') {
    return navigate('/');
  }
}, [isLoggedIn, navigate, pathname])

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        {pathname === "/" ? <Header isMain={true} isLoggedIn={isLoggedIn} /> : ''}
        {pathname === "/movies" || pathname === "/saved-movies" || pathname === "/profile" ? <Header isMain={false} isLoggedIn={isLoggedIn} /> : ''}
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/movies" element={<ProtectedRouteElement element={Movies} movies={movies} onSearch={searchMovie} onFilter={filterMovie} toggleAddMovie={toggleAddMovie} deleteMovie={deleteMovie} isLoading={isLoading} isLoggedIn={isLoggedIn} savedMovies={savedMovies} />} />
          <Route path="/saved-movies" element={<ProtectedRouteElement element={SavedMovies} movies={savedMovies} onSearch={searchInSavedMovies} onFilter={filterSavedMovies} deleteMovie={deleteMovie} isLoading={isLoading} isLoggedIn={isLoggedIn} savedMovies={savedMovies} />} />
          <Route path="/profile" element={<ProtectedRouteElement element={Profile} onSignOut={handleSignOut} onSubmit={handleUpdateUser} isLoggedIn={isLoggedIn} />} />
          <Route path="/sign-up" element={<Register onSubmit={handleSignUp} />} />
          <Route path="/sign-in" element={<Login onSubmit={handleSignIn} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <InfoToolTip isInfoToolTipOpen={isInfoToolTipOpen} isSuccessInfoToolTipStatus={isSuccessInfoToolTipStatus} onClose={closeInfoToolTip} infoText={infoText}/>
        {pathname === "/" || pathname === "/movies" || pathname === "/saved-movies" ? <Footer /> : ''}
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
