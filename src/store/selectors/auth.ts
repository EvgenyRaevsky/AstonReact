import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectAuthState = (state: RootState) => state.auth;

export const selectAuth = createSelector(
  [selectAuthState],
  authState => authState.auth
);
