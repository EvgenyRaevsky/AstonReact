import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface userState {
  uid: string;
  email: string | null;
}

interface initialUserState {
  user: userState | null;
}

const initialState: initialUserState = {
  user: null
};

export const userSLice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<userState>) => {
      state.user = action.payload;
    },
    clearUser: state => {
      state.user = null;
    }
  }
});

export const { setUser, clearUser } = userSLice.actions;
