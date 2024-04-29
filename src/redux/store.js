import { configureStore } from "@reduxjs/toolkit";
import user from "./user";
import cart from "./cart";

const store = configureStore({
  reducer: {
    user,
    cart,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
