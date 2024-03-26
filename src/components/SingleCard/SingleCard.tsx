import { useNavigate } from "react-router";
import { findVision, rarity } from "../../assets";
import { transformSingleHeroResponseType } from "../../types/HeroData";
import { useAppSelector } from "../../hooks/redux";
import { selectUser } from "../../store/selectors/user";
import { selectFavorite } from "../../store/selectors/favorite";
import { useFavorite } from "../../hooks/useFavorite";
import { useGetGenshinSingleHeroInfoQuery } from "../../store/genshinApi";
import { requestProcessingSearch } from "../../utils/requestProcessing";
import { Loader } from "../Loader/Loader";
import { NotFound } from "../NotFound/NotFound";
import heartRed from "../../assets/images/heartRed.svg";
import heart from "../../assets/images/heart.svg";
import "./SingleCard.css";

interface Props {
  name: string;
}

interface SingleHeroInfo {
  data: transformSingleHeroResponseType;
  isLoading: boolean;
  error: string;
}

export const SingleCard = ({ name }: Props) => {
  const navigate = useNavigate();
  const user = useAppSelector(selectUser);
  const favoritesList = useAppSelector(selectFavorite);
  const { addFavoritesHeroes, deleteFavoritesHeroes } = useFavorite();

  const transformName = requestProcessingSearch(name);

  const isFavorite = (id: string) => !!favoritesList.find(el => el.id === id);

  const addToFavorite = async () => {
    if (user?.email) {
      await addFavoritesHeroes(singleHeroInfo, user.email);
    } else {
      navigate("/signin");
    }
  };

  const removeFromFavorite = async () => {
    if (user?.email) {
      await deleteFavoritesHeroes(singleHeroInfo, user.email);
    }
  };

  const {
    data: singleHeroInfo,
    isLoading,
    error
  } = useGetGenshinSingleHeroInfoQuery<SingleHeroInfo>(transformName);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <NotFound />;
  }

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
        {isFavorite(singleHeroInfo.id) ? (
          <button
            className="single-card-info__btn single-card-info__btn_red"
            onClick={removeFromFavorite}
          >
            Remove from favorites <img src={heartRed} alt="Favorites" />
          </button>
        ) : (
          <button className="single-card-info__btn" onClick={addToFavorite}>
            Add to favorites <img src={heart} alt="Favorites" />
          </button>
        )}
      </div>
    </div>
  );
};
