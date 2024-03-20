import { findVision, rarity } from "../../assets";
import { transformSingleHeroResponseType } from "../../types/HeroData";
import heart from "../../assets/images/heart.svg";
import "./SingleCard.css";

interface Props {
  singleHeroInfo: transformSingleHeroResponseType;
}

export const SingleCard = ({ singleHeroInfo }: Props) => {
  return (
    <div className="single-card">
      <div className="single-card-image">
        <img
          src={`https://genshin.jmp.blue/characters/${singleHeroInfo.id}/card`}
          alt="Image"
        />
      </div>
      <div className="single-card-info">
        <h1 className="single-card-info__name">{singleHeroInfo.name}</h1>
        <h2 className="single-card-info__title">{singleHeroInfo.title}</h2>
        <p className="single-card-info__text single-card-info__text_img">
          <span className="single-card-info__text-bold">Element:</span>{" "}
          {<img src={findVision(singleHeroInfo.vision)} alt="Element" />}
        </p>
        <p className="single-card-info__text">
          <span className="single-card-info__text-bold">Type of weapon:</span>
          {singleHeroInfo.weapon}
        </p>
        <p className="single-card-info__text">
          <span className="single-card-info__text-bold">Release date:</span>{" "}
          {singleHeroInfo.release}
        </p>
        <p className="single-card-info__text single-card-info__text_img">
          <span className="single-card-info__text-bold">Rarity:</span>{" "}
          {rarity(singleHeroInfo.rarity).map((el, i) => {
            return <img src={el} alt="Star" key={i} />;
          })}
        </p>
        <p className="single-card-info__text">
          <span className="single-card-info__text-bold">Region:</span>
          {singleHeroInfo.nation}
        </p>
        <p className="single-card-info__text">
          <span className="single-card-info__text-bold">Gender:</span>{" "}
          {singleHeroInfo.gender || "Absent"}
        </p>
        <p className="single-card-info__text">
          <span className="single-card-info__text-bold">Affiliation:</span>
          {singleHeroInfo.affiliation}
        </p>
        <p className="single-card-info__text">
          <span className="single-card-info__text-bold">
            View of the constellation:
          </span>
          {singleHeroInfo.constellation}
        </p>
        <p className="single-card-info__text">
          <span className="single-card-info__text-bold">
            About the character:
          </span>
          {singleHeroInfo.description || "Absent"}
        </p>
        <button className="single-card-info__btn">
          Add to favorites <img src={heart} alt="Favorites" />
        </button>
      </div>
    </div>
  );
};
