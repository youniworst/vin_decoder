import { configureStore } from "@reduxjs/toolkit";
import { historySlice } from "./history/historySlice";

export const store = configureStore({
  reducer: {
    history: historySlice.reducer,
  },
});
