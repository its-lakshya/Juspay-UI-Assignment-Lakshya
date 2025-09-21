import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import layoutSlice from "./layoutSlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    layout: layoutSlice
  },
});
