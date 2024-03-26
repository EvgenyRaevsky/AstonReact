import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface initialHistoryState {
  history: string[];
  sagest: string[];
}

const initialState: initialHistoryState = {
  history: [],
  sagest: []
};

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    setHistory: (state, action: PayloadAction<string[]>) => {
      state.history = action.payload;
    },
    setSagest: (state, action: PayloadAction<string[]>) => {
      state.sagest = action.payload;
    }
  }
});

export const { setHistory, setSagest } = historySlice.actions;
