import './Profile.css';
import React from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import { useFormWithValidation } from '../../utils/Validation.js';

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [isInputActive, setIsInputActive] = React.useState(false);
  const [isDisabled, setIsDisabled] = React.useState(false);
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
  const [isSuccessfulMessage, setIsSuccessfulMessage] = React.useState('');


  React.useEffect(() => {
    if (currentUser.name === values.name || currentUser.email === values.email ) {
      setIsDisabled(true);
      setIsSuccessfulMessage('Пользователь с таким email уже существует.')
    } else if (values.email === '' || values.name === '') {
      setIsDisabled(true);
      setIsSuccessfulMessage('Необходимо запонить все поля');
    } else if (isValid) {
      setIsSuccessfulMessage('');
    }
    setIsDisabled(false);
  }, [currentUser.name, currentUser.email, values.name, values.email, isValid])

  function handleSubmit (e) {
    e.preventDefault();
    props.onSubmit({name: values.name, email: values.email})
    .then((res) => {
      setIsSuccessfulMessage('Данные успешно изменены.');
      setIsInputActive(false);
      resetForm();
    })
    .catch(err => {
      if (err === 409) {
        setIsSuccessfulMessage('Пользователь с таким email уже существует');
        setIsDisabled(true);
      } else {
      setIsSuccessfulMessage('При обновлении профиля произошла ошибка.');
      }
      console.log(err);
    })
  }

  function switchButtons () {
    setIsInputActive(true);
    setIsSuccessfulMessage('');
    setIsDisabled(true);
  }
  
  return (
    <section className="profile">
      <h3 className="profile__greeting">Привет, {currentUser.name}!</h3>
      <form className="profile__form" onSubmit={handleSubmit}>
        <div className="profile__form-item">
          <div className="profile__wrapper">
            <label htmlFor="name" className="profile__input-label">Имя</label>
            <input name="name" id="name" className="profile__input" type="text" placeholder={currentUser.name} required pattern="[а-яА-Яa-zA-ZёЁ\- ]{2,30}" disabled={isInputActive ? false : true} onChange={handleChange} value={values.name || ''}></input>
          </div>
          <span className="profile__error">{errors.name}</span>
        </div>
        <div className="profile__form-item">
          <div className="profile__wrapper">
            <label htmlFor="email" className="profile__input-label">E-mail</label>
            <input name="email" id="email" className="profile__input" type="email" placeholder={currentUser.email} required pattern="^[\w]+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$" disabled={isInputActive ? false : true} onChange={handleChange} value={values.email || ''}></input>
          </div>
          <span className="profile__error">{errors.email}</span>
        </div>
      </form>
      <span className="profile__status-message">{isSuccessfulMessage}</span>
      {!isInputActive ?
        <>
          <button type="button" value="Редактировать" className="profile__edit-button" onClick={switchButtons}>Редактировать</button>
          <button type="button" className="profile__signout-button" onClick={props.onSignOut}>Выйти из аккаунта</button>
        </> :
        <>
          <button className="profile__save-button" type="submit" onClick={handleSubmit} disabled={isDisabled || !isValid || isSuccessfulMessage !== '' ? true : false}>Сохранить</button>
      </>
      }
    </section>
  );
}

export default Profile;
