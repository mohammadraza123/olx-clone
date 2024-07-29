import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
  }

  export const favouritesSlice = createSlice({
    name: "favourites",
    initialState,
    reducers: {
        addItem: (state) => {
        state.value += 1;
      },
      removeItem: (state) => {
        state.value += 1;
      },
    },
  });

  export const { addItem, removeItem } = favouritesSlice.actions;

export default favouritesSlice.reducer