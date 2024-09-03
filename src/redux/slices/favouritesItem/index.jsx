import { createSlice } from '@reduxjs/toolkit';

const loadFromLocalStorage = () => {
  try {
    const storedData = localStorage.getItem('wishList');
    if (storedData === null) {
      return [];
    }
    return JSON.parse(storedData);
  } catch (error) {
    console.error('Could not load from localStorage', error);
    return [];
  }
};

const saveToLocalStorage = (state) => {
  try {
    const storedData = JSON.stringify(state.wishList);
    localStorage.setItem('wishList', storedData);
  } catch (error) {
    console.error('error: ', error);
  }
};

const initialState = {
  wishList: loadFromLocalStorage(), 
};

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const exists = state.wishList.some((item) => item.id === action.payload.id);
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
