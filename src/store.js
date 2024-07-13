// // store.js

// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from './CreatSlice'; // Importăm reducer-ul creat

// const store = configureStore({
//   reducer: {
//     cart: cartReducer, // Adăugăm reducer-ul în magazin
//   },
// });

// export default store;
// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CreatSlice'; // Adjust the path as necessary

const store = configureStore({
  reducer: {
    cart: cartReducer, // Adaugă reducer-ul în magazin
  },
});

export default store;
