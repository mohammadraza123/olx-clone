import { configureStore } from "@reduxjs/toolkit";
import { favouritesSlice } from "./slices/favouritesItem";
const store = configureStore({
  reducer: {

    favourites: favouritesSlice

  },
});

export default store;
