import toast from "react-hot-toast";
import { createListenerMiddleware } from "@reduxjs/toolkit";
import { setUser, clearUser } from "../slice/userSlice";

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: setUser,
  effect: action => {
    toast.success(`Login as a user: ${action.payload.email}`);
  }
});

listenerMiddleware.startListening({
  actionCreator: clearUser,
  effect: () => {
    toast.success("User Logout");
  }
});
