import {
  fetchAreaStart,
  fetchAreaSuccess,
  fetchAreaFailed,
} from "../redux/area";
import config from "../configAxios";

export const apiArea = async (dispatch) => {
  dispatch(fetchAreaStart());
  try {
    const response = await config({
      method: "get",
      url: "/api/v1/area",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      dispatch(fetchAreaSuccess(response.data.response));
    } else {
      dispatch(fetchAreaFailed(response.data.msg));
    }
  } catch (error) {
    dispatch(fetchAreaFailed(error));
  }
};
