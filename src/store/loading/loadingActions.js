import { loadingActions } from "./loadingSlice";

export const setLoading = (data) => (dispatch) => {
  dispatch(loadingActions.setLoading(data));
};
