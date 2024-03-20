import { transformSingleHeroResponseType } from "../../types/HeroData";
import { findVision, rarity } from "../../assets";
import heart from "../../assets/images/heart.svg";
import "./Card.css";
import { NavLink } from "react-router-dom";

interface Props {
  hero: transformSingleHeroResponseType;
}

export const Card = ({ hero }: Props) => {
  return (
    <NavLink to={`/characters/${hero.id}`} className="card">
      <img src={findVision(hero.vision)} alt="Element" className="card__bg" />
      <h2 className="card__title">{hero.name}</h2>
      <div className="card__box">
        <div>
          <p className="card__text">{hero.title}</p>
          <p className="card__text">{hero.vision}</p>
        </div>
        <p className="card__text card__text_gap">
          {rarity(hero.rarity).map((el, i) => {
            return <img className="card__star" src={el} alt="Star" key={i} />;
          })}
        </p>
      </div>
      <p className="card__text">
        <img className="card__heart" src={heart} alt="Favourites" />
      </p>
    </NavLink>
  );
};
