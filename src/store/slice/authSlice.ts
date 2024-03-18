import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface initialAuthState {
  auth: boolean;
}

const initialState: initialAuthState = {
  auth: false
};

export const authSlice = createSlice({
  name: "isAuth",
  initialState,
  reducers: {
    toggleAuth: (state, action: PayloadAction<boolean>) => {
      state.auth = action.payload;
    }
  }
});

export const { toggleAuth } = authSlice.actions;
