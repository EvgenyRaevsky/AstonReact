import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc
} from "firebase/firestore";
import { useAppDispatch } from "./redux";
import { db } from "../firebase";
import { setFavorites } from "../store/slice/favoriteSlice";
import { transformSingleHeroResponseType } from "../types/HeroData";

export const useFavorite = () => {
  const dispatch = useAppDispatch();

  const readFavoritesHeroes = async (email: string) => {
    const data = await getDoc(doc(db, "users", email));
    if (data.exists() && data.data() && data.data()["favorite"]) {
      dispatch(setFavorites(data.data()["favorite"]));
    }
  };

  const addFavoritesHeroes = async (
    hero: transformSingleHeroResponseType,
    email: string
  ) => {
    await updateDoc(doc(db, "users", email), {
      ["favorite"]: arrayUnion(hero)
    });
    await readFavoritesHeroes(email);
  };

  const deleteFavoritesHeroes = async (
    hero: transformSingleHeroResponseType,
    email: string
  ) => {
    await updateDoc(doc(db, "users", email), {
      ["favorite"]: arrayRemove(hero)
    });
    await readFavoritesHeroes(email);
  };

  return { readFavoritesHeroes, addFavoritesHeroes, deleteFavoritesHeroes };
};
