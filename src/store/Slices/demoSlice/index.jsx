import { createSlice } from "@reduxjs/toolkit";
export const demoSlice = createSlice({
  name: "demo",
  initialState: 1200,
  reducers: {
    deposit: (state, action) => {
      return state + +action.payload;
    },
    withdraw: (state, action) => {
      return state - +action.payload;
    },
  },
});

export const { deposit, withdraw } = demoSlice.actions;
export default demoSlice.reducer;
