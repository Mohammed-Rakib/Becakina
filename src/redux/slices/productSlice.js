import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("http://localhost:7070/products");
    const data = response.json();
    return data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    cart: [],
    status: "idle",
  },
  reducers: {
    addToCart: (state, action) => {
      const prevCart = state.cart.filter((pd) => pd._id !== action.payload._id);
      state.cart = [...prevCart, action.payload];
      // state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((pd) => pd._id !== action.payload);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.status = "pending";
    });
  },
});

export const { addToCart, removeFromCart } = productSlice.actions;

export default productSlice.reducer;
