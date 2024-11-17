import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalCost: 0,
  },
  reducers: {
    addToCart(state, action) {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity++;
      state.totalCost += action.payload.price;
    },
    incrementQuantity(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      item.quantity++;
      state.totalQuantity++;
      state.totalCost += item.price;
    },
    decrementQuantity(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item.quantity > 1) {
        item.quantity--;
        state.totalQuantity--;
        state.totalCost -= item.price;
      }
    },
    removeItem(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      state.totalQuantity -= item.quantity;
      state.totalCost -= item.price * item.quantity;
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
