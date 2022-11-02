import {
  fetchPostStart,
  fetchPostSuccess,
  fetchPostFailed,
  fetchPostsLimitSuccess,
  fetchPostsLimitStart,
  fetchPostsLimitFailed,
  fetchNewPostsSuccess,
  fetchNewPostStart,
  fetchNewPostsFailed,
  fetchPostedSuccess,
} from "../redux/postSlice";
import config from "../configAxios";

import axios from "axios";

export const apiPosts = async (dispatch) => {
  dispatch(fetchPostStart());
  try {
    const response = await config({
      method: "get",
      url: "/api/v1/post/all",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      dispatch(fetchPostSuccess(response.data.response));
    } else {
      dispatch(fetchPostFailed(response.data));
    }
  } catch (error) {
    dispatch(fetchPostFailed(error));
  }
};
export const apiPostsLimit = async (query, dispatch) => {
  dispatch(fetchPostsLimitStart());
  try {
    const response = await config({
      method: "get",
      url: `/api/v1/post/limit`,
      headers: {
        "Content-Type": "application/json",
      },
      params: query,
    });
    if (response.status === 200) {
      dispatch(fetchPostsLimitSuccess(response?.data?.response));
    } else {
      dispatch(fetchPostsLimitFailed(response.data));
    }
  } catch (error) {
    dispatch(fetchPostsLimitFailed(error));
  }
};
export const apiPosted = async (query, dispatch) => {
  const token = JSON.parse(localStorage.getItem("token")).token;
  try {
    const response = await config({
      method: "get",
      url: `/api/v1/post/getLimitAdmin`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      dispatch(fetchPostedSuccess(response?.data?.response));
    } else {
      console.log("lỗi");
    }
  } catch (error) {
    console.log(error);
  }
};
export const apiPostsLimitNewPosts = async (dispatch) => {
  dispatch(fetchNewPostStart());
  try {
    const response = await config({
      method: "get",
      url: `/api/v1/post/getNewPosts`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      dispatch(fetchNewPostsSuccess(response?.data?.response));
    } else {
      dispatch(fetchNewPostsFailed());
    }
  } catch (error) {
    dispatch(fetchNewPostsFailed(error));
  }
};
export const apiPostsDetail = async (id, dispatch) => {
  dispatch(fetchPostsLimitStart());
  try {
    const response = await config({
      method: "get",
      url: `/api/v1/post/limit?id=${id}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      dispatch(fetchPostsLimitSuccess(response?.data?.response));
    } else {
      dispatch(fetchPostsLimitFailed(response.data));
    }
  } catch (error) {
    dispatch(fetchPostsLimitFailed(error));
  }
};
export const apiUploadImages = (formData) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "post",
        url: `https://api.cloudinary.com/v1_1/dxcershra/image/upload/`,
        data: formData,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiCreatePost = (payload) =>
  new Promise(async (resolve, reject) => {
    const token = JSON.parse(localStorage.getItem("token")).token;
    try {
      const response = await config({
        method: "post",
        url: `/api/v1/post/createNewPost`,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
