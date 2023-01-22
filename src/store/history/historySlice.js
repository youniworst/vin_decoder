import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  history: [],
};

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addVin(state, action) {;
      state.history = [...state.history, action.payload];
      if (state.history.length > 5)
        state.history = state.history
          .slice(0, 0)
          .concat(state.history.slice(1, 6));
    },
  },
});

export const historyActions = historySlice.actions;
