import config from "../configAxios";
import {
  fetchCategoryStart,
  fetchCategorySuccess,
  fetchCategoryFailed,
} from "../redux/category";
export const apiNavigation = async (dispatch) => {
  dispatch(fetchCategoryStart());
  try {
    const response = await config({
      method: "get",
      url: "/api/v1/category/all",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      dispatch(fetchCategorySuccess(response.data.response));
    } else {
      dispatch(fetchCategoryFailed(response.data.msg));
    }
  } catch (error) {
    dispatch(fetchCategoryFailed(error));
  }
};
