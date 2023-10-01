import './SearchForm.css';
import searchIcon from '../../images/searchIcon.svg';
import React from 'react';

function SearchForm(props) {
  const [values, setValues] = React.useState({search: '', shortMovie: false});
  const [error, setError] = React.useState('');
  
  function handleShortMovieChange (e) {
    setValues({...values, shortMovie: !values.shortMovie});
    props.onFilter(values);
  }

  function handleSearchMovieChange (e) {
    setError('');
    setValues({...values, search: e.target.value});
  }
  
  function searchMovie (values) {
    setError('');
    props.onSearch(values);
    /*.catch((err) => {
      setError('Во время запроса произошла ошибка. Подождите немного и попробуйте еще раз.');
      console.log(err);
    });*/
  }

  function handleSubmit (e) {
    e.preventDefault();
    setValues(values);
    if (values.search === '') {
      setError('Введите ключевое слово для поиска');
      return
    }
    searchMovie(values);
  }

  React.useEffect(() => {
    localStorage.setItem('search-query', JSON.stringify(values));
  }, [values])
  
  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit} noValidate>
        <div className="search__bar">
          <input className="search__input" type="text" placeholder="Фильм" required name="search" value={values.search} onChange={handleSearchMovieChange}></input>
          <button type="submit" className="search__submit-button" disabled={props.isLoading}>
            <img className="search__icon" src={searchIcon} alt="Лупа" />
          </button>
        </div>
        <span className="search__error">{error}</span>
        <div className="search__checkbox-container">
          <input className="search__tumbler" type="checkbox" id="shortMovie" name="shortMovie" onChange={handleShortMovieChange} checked={values.shortMovie}></input>
          <label htmlFor="shortMovie" className="search__tumbler-label">Короткометражки</label>
        </div>
      </form>
      <hr className="search__line"></hr>
    </section>
  );
}

export default SearchForm;