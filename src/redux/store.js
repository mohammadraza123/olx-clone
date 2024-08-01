import { configureStore } from '@reduxjs/toolkit'
import favouritesReducer from './slices/favouritesItem'
export const store = configureStore({
  reducer: {
    favourites: favouritesReducer
  },
})
