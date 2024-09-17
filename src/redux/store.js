import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouritesReducer from "./slices/favouritesItem";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "wishlist",
  storage,
};

const rootReducer = combineReducers({
  favourites: favouritesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
