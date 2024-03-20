import { createSlice } from "@reduxjs/toolkit";

interface initialCardState {
  length: number;
  disabled: boolean;
}

const initialState: initialCardState = {
  length: 19,
  disabled: false
};

export const moreCardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    showMoreCard: (state, action) => {
      state.length = action.payload;
    },
    endLenCard: state => {
      state.disabled = true;
    }
  }
});

export const { showMoreCard, endLenCard } = moreCardSlice.actions;
