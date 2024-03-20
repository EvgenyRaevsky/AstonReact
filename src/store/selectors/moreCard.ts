import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectMoreCardState = (state: RootState) => state.moreCard;

export const selectMoreCard = createSelector(
  [selectMoreCardState],
  moreCardState => moreCardState.length
);

export const selectEndCard = createSelector(
  [selectMoreCardState],
  moreCardState => moreCardState.disabled
);
