import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0, username: "Rohit" };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;

// dispatch function(action) ----> reducer call ----> state change ----> UI update
