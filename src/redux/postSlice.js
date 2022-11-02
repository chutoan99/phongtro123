import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    allPosts: {
      data: null,
      error: false,
      success: false,
      count: 0,
    },
    limitPosts: {
      data: null,
      error: false,
      success: false,
      page: null,
      count: 0,
      total: 0,
    },
    newPosts: {
      data: null,
      error: false,
      success: false,
      count: 0,
    },
    posted: {
      data: null,
      error: false,
      success: false,
      count: 0,
    },
    postEdit: {
      data: null,
    },
  },
  reducers: {
    // postAll
    fetchPostStart: (state) => {
      state.allPosts.error = false;
      state.allPosts.success = false;
      state.allPosts.data = null;
    },
    fetchPostSuccess: (state, action) => {
      state.allPosts.success = true;
      state.allPosts.data = action.payload;
      state.allPosts.count = action.payload.length;
    },
    fetchPostFailed: (state, action) => {
      state.allPosts.data = null;
      state.allPosts.error = action.payload;
    },
    // post limit
    fetchPostsLimitStart: (state) => {
      state.limitPosts.data = null;
      state.limitPosts.error = false;
      state.limitPosts.count = 0;
      state.limitPosts.total = 0;
    },
    fetchPostsLimitSuccess: (state, action) => {
      state.limitPosts.data = action.payload.rows;
      state.limitPosts.success = true;
      state.limitPosts.page = action.payload.page;
      state.limitPosts.count = action.payload.count;
    },
    fetchPostsLimitFailed: (state, action) => {
      state.limitPosts.data = null;
      state.limitPosts.error = action.payload;
      state.limitPosts.count = 0;
      state.limitPosts.total = 0;
    },
    // newPosts
    fetchNewPostStart: (state) => {
      state.newPosts.data = null;
      state.newPosts.error = false;
      state.newPosts.count = 0;
      state.newPosts.total = 0;
    },
    fetchNewPostsFailed: (state, action) => {
      state.newPosts.data = null;
      state.newPosts.error = action.payload;
    },
    fetchNewPostsSuccess: (state, action) => {
      state.newPosts.data = action.payload.rows;
      state.newPosts.success = true;
    },
    // posted
    fetchPostedSuccess: (state, action) => {
      state.posted.data = action.payload.rows;
      state.posted.success = true;
    },
    // postEdit
    fetchPostEdit: (state, action) => {
      state.postEdit.data = action.payload;
    },
    fetchPostFail: (state) => {
      state.postEdit.data = null;
    },
  },
});

export const {
  fetchPostStart,
  fetchNewPostsFailed,
  fetchPostSuccess,
  fetchPostFailed,
  fetchPostsLimitSuccess,
  fetchPostsLimitStart,
  fetchPostsLimitFailed,
  fetchNewPostsSuccess,
  fetchNewPostStart,
  fetchPostedSuccess,
  fetchPostEdit,
  fetchPostFail,
} = postSlice.actions;
export default postSlice.reducer;
