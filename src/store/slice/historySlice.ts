import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface initialHistoryState {
  history: string[];
  uploadingHistory: boolean;
}

const initialState: initialHistoryState = {
  history: [],
  uploadingHistory: true
};

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    setHistory: (state, action: PayloadAction<string[]>) => {
      state.history = action.payload;
      state.uploadingHistory = false;
    }
  }
});

export const { setHistory } = historySlice.actions;
