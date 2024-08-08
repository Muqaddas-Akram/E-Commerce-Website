// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice'; // Adjust the path if necessary


export const store = configureStore({
  reducer: {
    cart: cartReducer,

  },
});
