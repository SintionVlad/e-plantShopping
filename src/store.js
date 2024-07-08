// store.js

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CreatSlice'; // Importăm reducer-ul creat

const store = configureStore({
  reducer: {
    cart: cartReducer, // Adăugăm reducer-ul în magazin
  },
});

export default store;
