import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vin: null,
};

export const actualDecodedVinSlice = createSlice({
  name: "actualDecodedVin",
  initialState,
  reducers: {
    setVin(state, action) {
      state.vin = action.payload;
    },
  },
});

export const actualDecodedVinActions = actualDecodedVinSlice.actions;
