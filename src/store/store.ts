import { configureStore } from "@reduxjs/toolkit";
import { genshinApi } from "./genshinApi";
import { userSLice } from "./slice/userSlice";
import { authSlice } from "./slice/authSlice";
import { moreCardSlice } from "./slice/moreCardSlice";

export const store = configureStore({
  reducer: {
    [genshinApi.reducerPath]: genshinApi.reducer,
    user: userSLice.reducer,
    auth: authSlice.reducer,
    moreCard: moreCardSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(genshinApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
