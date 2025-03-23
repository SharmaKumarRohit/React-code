import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItemToCart: (cart, action) => {
      cart.push(action.payload);
    },
    increaseQty: (cart, action) => {
      cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem.quantity = cartItem.quantity + 1;
        }
      });
    },
    decreaseQty: (cart, action) => {
      cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem.quantity = cartItem.quantity - 1;
        }
      });
    },
    removeItem: (cart, action) => {
      return cart.filter((cartItem) => cartItem.id !== action.payload.id);
    },
  },
});

export const { increaseQty, decreaseQty, addItemToCart, removeItem } =
  cartSlice.actions;

export default cartSlice.reducer;
