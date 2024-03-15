import { SingleHeroResponseType } from "../../types/HeroData";
import { findVision } from "../../assets";
import "./Card.css";

export const Card = ({ hero }: { hero: SingleHeroResponseType }) => {
  return (
    <div className="card">
      <img src={findVision(hero.vision)} alt="Element" className="card__bg" />
      <h2 className="card__title">{hero.name}</h2>
      <p className="card__text">{hero.title}</p>
      <p className="card__text">{hero.vision}</p>
    </div>
  );
};
