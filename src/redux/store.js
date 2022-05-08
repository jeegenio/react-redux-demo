import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./cake/cakeReducer";

const store = configureStore({
  reducer: { counter: cakeReducer },
});
export default store;
