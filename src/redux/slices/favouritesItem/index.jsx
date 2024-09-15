import { createSlice } from "@reduxjs/toolkit";

const saveToLocalStorage = (state) => {
  try {
    const storedData = JSON.stringify(state.wishList);
    console.log(storedData);
  } catch (error) {
    console.error("error: ", error);
  }
};

const initialState = {
  wishList: [],
};

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const exists = state.wishList.some(
        (item) => item.id === action.payload.id
      );
      if (!exists) {
        state.wishList.push(action.payload);
        saveToLocalStorage(state);
      }
    },
    removeItem: (state, action) => {
      state.wishList = state.wishList.filter(
        (item) => item.id !== action.payload.id
      );
      saveToLocalStorage(state);
    },
    savedItems: (state, action) => {
      state.wishList = action.payload;
      saveToLocalStorage(state);
    },
  },
});

export const { addItem, removeItem, savedItems } = favouritesSlice.actions;

export default favouritesSlice.reducer;
