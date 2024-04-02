import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { transformSingleHeroResponseType } from "../../types/HeroData";

interface initialFavoriteState {
  favorites: transformSingleHeroResponseType[];
  uploadingFavorites: boolean;
}

const initialState: initialFavoriteState = {
  favorites: [],
  uploadingFavorites: true
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    setFavorites: (
      state,
      action: PayloadAction<transformSingleHeroResponseType[]>
    ) => {
      state.favorites = action.payload;
      state.uploadingFavorites = false;
    }
  }
});

export const { setFavorites } = favoriteSlice.actions;
