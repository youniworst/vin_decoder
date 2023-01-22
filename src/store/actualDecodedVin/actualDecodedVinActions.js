import { actualDecodedVinActions } from "./actualDecodedVinSlice";

export const setVin = (data) => (dispatch) => {
  dispatch(actualDecodedVinActions.setVin(data));
};
