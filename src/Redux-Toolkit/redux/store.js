import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";
import todoSlice from "./slice/todoSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    todo: todoSlice,
  },
});
