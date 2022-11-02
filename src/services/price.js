import {
  fetchPriceStart,
  fetchPriceSuccess,
  fetchPriceFailed,
} from "../redux/price";
import config from "../configAxios";

export const apiPrices = async (dispatch) => {
  dispatch(fetchPriceStart());
  try {
    const response = await config({
      method: "get",
      url: "/api/v1/price",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      dispatch(fetchPriceSuccess(response.data.response));
    } else {
      dispatch(fetchPriceFailed(response.data.msg));
    }
  } catch (error) {
    dispatch(fetchPriceFailed(error));
  }
};
