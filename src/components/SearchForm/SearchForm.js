import './SearchForm.css';
import searchIcon from '../../images/searchIcon.svg';

function SearchForm(props) {
  return (
    <section className="search">
      <form className="search__form">
        <div className="search__bar">
          <input className="search__input" type="text" placeholder="Фильм" required></input>
          <button type="submit" className="search__submit-button">
            <img className="search__icon" src={searchIcon} alt="Лупа" />
          </button>
        </div>
        <div className="search__checkbox-container">
          <input className="search__tumbler" type="checkbox" id="shortMovie"></input>
          <label for="shortMovie" className="search__tumbler-label">Короткометражки</label>
        </div>
      </form>
      <hr className="search__line"></hr>
    </section>
  );
}

export default SearchForm;