import { useNavigate } from "react-router-dom";
import { transformSingleHeroResponseType } from "../../types/HeroData";
import { findVision, rarity } from "../../assets";
import { useAppSelector } from "../../hooks/redux";
import { selectFavorite } from "../../store/selectors/favorite";
import { selectUser } from "../../store/selectors/user";
import { useFavorite } from "../../hooks/useFavorite";
import heart from "../../assets/images/heart.svg";
import heartRed from "../../assets/images/heartRed.svg";
import "./Card.css";

interface Props {
  hero: transformSingleHeroResponseType;
}

export const Card = ({ hero }: Props) => {
  const navigate = useNavigate();
  const user = useAppSelector(selectUser);
  const favoritesList = useAppSelector(selectFavorite);
  const { addFavoritesHeroes, deleteFavoritesHeroes } = useFavorite();

  const isFavorite = (id: string) => !!favoritesList.find(el => el.id === id);

  const addToFavorite = async (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    if (user?.email) {
      await addFavoritesHeroes(hero, user.email);
    }
  };

  const removeFromFavorite = async (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    if (user?.email) {
      await deleteFavoritesHeroes(hero, user.email);
    }
  };

  const clickOnCard = () => {
    navigate(`/${hero.id}`);
  };

  return (
    <div className="card" onClick={clickOnCard}>
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
        {user &&
          (isFavorite(hero.id) ? (
            <img
              className="card__heart"
              src={heartRed}
              alt="Favourites"
              onClick={removeFromFavorite}
            />
          ) : (
            <img
              className="card__heart"
              src={heart}
              alt="Favourites"
              onClick={addToFavorite}
            />
          ))}
      </p>
    </div>
  );
};
