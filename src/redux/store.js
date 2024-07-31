import { configureStore } from '@reduxjs/toolkit';
import favouritesReducer from './slices/favouritesItem';

const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
  },
});

export default store;
