import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    status: "idle",
  },
  reducers: {
    addToCart: (state, action) => {
      const prevCart = state.cart?.filter(
        (pd) => pd._id !== action.payload._id
      );
      state.cart = [...prevCart, action.payload];
      // state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((pd) => pd._id !== action.payload);
    },
    clearCart: (state, action) => {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
