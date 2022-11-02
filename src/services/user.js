import config from "../configAxios";
import {
  currentUserStart,
  currentUserSuccess,
  currentUserFailed,
} from "../redux/user";
import { logoutSuccess } from "../redux/authSlice";
export const apiCurrentUser = async (dispatch) => {
  const token = JSON.parse(localStorage.getItem("token")).token;
  dispatch(currentUserStart());
  try {
    const responsive = await config({
      method: "get",
      url: "/api/v1/currentUser",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (responsive.data.err === 0) {
      dispatch(currentUserSuccess(responsive.data));
    } else {
      dispatch(currentUserFailed(responsive.data));
      dispatch(logoutSuccess());
    }
  } catch (error) {
    dispatch(currentUserFailed(error));
  }
};
