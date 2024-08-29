import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  wishList: []
}

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const exists = state.wishList.some((item) => item.id ===action.payload.id)

      if (!exists){
        state.wishList.push(action.payload);
      }
     
    },
    setItems: (state, action) => {
      state.wishList = action.payload;
    },
    removeItem: (state, action) => {
      state.wishList = state.wishList.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { addItem, removeItem, setItems } = favouritesSlice.actions;

export default favouritesSlice.reducer