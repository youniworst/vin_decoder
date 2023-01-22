import { configureStore } from "@reduxjs/toolkit";
import { actualDecodedVinSlice } from "./actualDecodedVin/actualDecodedVinSlice";
import { historySlice } from "./history/historySlice";
import { loadingSlice } from "./loading/loadingSlice";

export const store = configureStore({
  reducer: {
    history: historySlice.reducer,
    actualDecodedVin: actualDecodedVinSlice.reducer,
    loading: loadingSlice.reducer,
  },
});
