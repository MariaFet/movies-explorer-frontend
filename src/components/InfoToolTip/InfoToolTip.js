import success from '../../images/success.svg';
import fail from '../../images/fail.svg';
import './InfoToolTip.css';

function InfoToolTip (props) {

  return (
    <section className={`popup ${props.isInfoToolTipOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <img className="popup__picture" src={props.isSuccessInfoTooltipStatus ? success : fail} alt="Успешно" />
        <p className="popup__text">{props.infoText}</p>
        <button className="popup__button-close" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
      </div>
    </section>
  )
}

export default InfoToolTip;