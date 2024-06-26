import { Card } from "../../components/Card/Card";
import { Container } from "../../components/Container/Container";
import { Loader } from "../../components/Loader/Loader";
import { useAppSelector } from "../../hooks/redux";
import {
  selectFavorite,
  selectUploadingFavorites
} from "../../store/selectors/favorite";

export const Favorites = () => {
  const favoriteList = useAppSelector(selectFavorite);
  const uploadingFavorites = useAppSelector(selectUploadingFavorites);

  if (uploadingFavorites) {
    return <Loader />;
  }

  return (
    <Container>
      <h1 className="container__title">Your Favorite Heroes</h1>
      {favoriteList.length > 0 ? (
        favoriteList.map((hero, i) => {
          return <Card hero={hero} key={i} />;
        })
      ) : (
        <h1 className="container__favorite-none">
          {"You don't have any favorite heroes"}
        </h1>
      )}
    </Container>
  );
};
