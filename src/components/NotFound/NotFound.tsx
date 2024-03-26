import error from "../../assets/images/error.png";
import "./NotFound.css";

export const NotFound = () => {
  return (
    <div className="not-found">
      <img src={error} alt="Error" />
      <h1 className="not-found__title">Nothing was found for your query</h1>
      <p className="not-found__text">
        The owner deleted the files, closed access, or there was a typo in your
        request, try again later
      </p>
    </div>
  );
};
