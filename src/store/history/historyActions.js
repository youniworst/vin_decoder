import { historyActions } from "./historySlice";

export const addVin = (data) => (dispatch) => {
  dispatch(historyActions.addVin(data));
};
