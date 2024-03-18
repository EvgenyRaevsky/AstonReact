import error from "../../assets/images/error.png";
import "./Error.css";

export const Error = () => {
  return (
    <div className="error-wrapper">
      <div className="error-container">
        <p className="error-container__item error-container__item_bold">
          Упс...
        </p>
        <p className="error-container__item">Что то пошло не так!</p>
        <p className="error-container__item">Попробуйте снова позже.</p>
      </div>
      <img src={error} alt="Error" />
    </div>
  );
};
