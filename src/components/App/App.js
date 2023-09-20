import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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

function App() {
  const { pathname } = useLocation();
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const pathNameCheck = () => {
    if (pathname === "/" || pathname === "/movies" || pathname === "/saved-movies" || pathname === "/profile") {
      return true;
    }
    return false;
  };

  return (
    <div className="App">
      {pathname === "/" ? <Header isMain={true} isLoggedIn={isLoggedIn} /> : ''}
      {pathname === "/movies" || pathname === "/saved-movies" || pathname === "/profile" ? <Header isMain={false} isLoggedIn={isLoggedIn} /> : ''}
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {pathname === "/" || pathname === "/movies" || pathname === "/saved-movies" ? <Footer /> : ''}
    </div>
  );
}

export default App;
