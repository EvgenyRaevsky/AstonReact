import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectHistoryState = (state: RootState) => state.history;

export const selectHistory = createSelector(
  [selectHistoryState],
  selectHistoryState => selectHistoryState.history
);

export const selectUploadingHistory = createSelector(
  [selectHistoryState],
  selectHistoryState => selectHistoryState.uploadingHistory
);
