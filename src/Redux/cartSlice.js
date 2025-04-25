// redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.idDrink === action.payload.idDrink);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.idDrink !== action.payload.idDrink);
    },
    updateQuantity: (state, action) => {
      const item = state.items.find(item => item.idDrink === action.payload.idDrink);
      if (item) {
        if (action.payload.quantity <= 0) {
          state.items = state.items.filter(i => i.idDrink !== action.payload.idDrink);
        } else {
          item.quantity = action.payload.quantity;
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    }
  }
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;