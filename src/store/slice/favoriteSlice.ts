import { createSlice } from "@reduxjs/toolkit";
import { transformSingleHeroResponseType } from "../../types/HeroData";

interface initialFavoriteState {
  favorites: transformSingleHeroResponseType[];
}

const initialState: initialFavoriteState = {
  favorites: []
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    setFavorites: (state, action) => {
      state.favorites = action.payload;
    }
  }
});

export const { setFavorites } = favoriteSlice.actions;
