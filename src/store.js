// store.js

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CreatSlice'; // Make sure to adjust the path

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
