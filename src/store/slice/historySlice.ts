import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface initialHistoryState {
  history: string[];
  suggest: string[];
}

const initialState: initialHistoryState = {
  history: [],
  suggest: []
};

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    setHistory: (state, action: PayloadAction<string[]>) => {
      state.history = action.payload;
    },
    setSuggest: (state, action: PayloadAction<string[]>) => {
      state.suggest = action.payload;
    }
  }
});

export const { setHistory, setSuggest } = historySlice.actions;
