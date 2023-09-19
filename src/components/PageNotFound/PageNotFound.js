import { useNavigate } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound(props) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <section className="error">
      <p className="error__code">404</p>
      <p className="error__message">Страница не найдена</p>
      <button className="error__return-link" onClick={goBack}>Назад</button>      
    </section>
  )
}

export default PageNotFound;