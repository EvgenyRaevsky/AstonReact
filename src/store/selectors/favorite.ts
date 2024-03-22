import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectFavoriteState = (state: RootState) => state.favorite;

export const selectFavorite = createSelector(
  [selectFavoriteState],
  selectFavoriteState => selectFavoriteState.favorites
);
