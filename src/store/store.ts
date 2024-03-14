import { configureStore } from "@reduxjs/toolkit";
import { genshinApi } from "./genshinApi";

export const store = configureStore({
  reducer: {
    [genshinApi.reducerPath]: genshinApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(genshinApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
