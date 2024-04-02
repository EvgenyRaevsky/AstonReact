import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface initialHistoryState {
  history: string[];
  suggest: string[];
  uploadingHistory: boolean;
}

const initialState: initialHistoryState = {
  history: [],
  suggest: [],
  uploadingHistory: true
};

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    setHistory: (state, action: PayloadAction<string[]>) => {
      state.history = action.payload;
      state.uploadingHistory = false;
    },
    setSuggest: (state, action: PayloadAction<string[]>) => {
      state.suggest = action.payload;
    }
  }
});

export const { setHistory, setSuggest } = historySlice.actions;
