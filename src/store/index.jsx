import { configureStore } from "@reduxjs/toolkit";
import demoSlice from "./Slices/demoSlice";
export const store = configureStore({
  reducer: {
    demo: demoSlice,
  },
});
