import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices/CartSlice";
import LoginSlice from "./Slices/LoginSlice";

const store = configureStore({
  reducer: {
    cart: CartSlice,
    login: LoginSlice,
  },
});

export default store;
