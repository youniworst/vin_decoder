import { configureStore } from "@reduxjs/toolkit";
import { actualDecodedVinSlice } from "./actualDecodedVin/actualDecodedVinSlice";
import { historySlice } from "./history/historySlice";

export const store = configureStore({
  reducer: {
    history: historySlice.reducer,
    actualDecodedVin: actualDecodedVinSlice.reducer,
  },
});
