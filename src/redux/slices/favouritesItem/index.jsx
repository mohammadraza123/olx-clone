import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishList: [],
};

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.wishList.push(action.payload);
    },
    // Uncomment and implement if needed
    // removeItem: (state, action) => {
    //   state.wishList = state.wishList.filter(item => item.id !== action.payload);
    // },
  },
});

export const { addItem } = favouritesSlice.actions;
export default favouritesSlice.reducer;
