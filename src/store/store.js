import { configureStore } from "@reduxjs/toolkit";
import { globalSlice } from "./slices/globalSlice";

export const store = configureStore({
  reducer: {
    global: globalSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
