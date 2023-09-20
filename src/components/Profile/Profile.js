import './Profile.css';

function Profile(props) {
  return (
    <section className="profile">
      <h3 className="profile__greeting">Привет, {props.userName}!</h3>
      <form className="profile__form">
        <div className="profile__form-item">
          <label htmlFor="name" className="profile__input-label">Имя</label>
          <input id="name" className="profile__input" type="text" placeholder={props.userName} required></input>
        </div>
        <div className="profile__form-item">
          <label htmlFor="email" className="profile__input-label">E-mail</label>
          <input id="email" className="profile__input" type="email" placeholder={props.email} required></input>
        </div>
        <input type="submit" value="Редактировать" className="profile__edit-button"></input>
      </form>
      <button className="profile__signout-button">Выйти из аккаунта</button>
    </section>
  );
}

export default Profile;
