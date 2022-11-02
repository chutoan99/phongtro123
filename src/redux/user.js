import { createSlice } from "@reduxjs/toolkit";
// 0785110988 tấn
const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: {
      error: false,
      success: false,
      data: null,
    },
  },
  reducers: {
    // currentUser
    currentUserStart: (state) => {
      state.currentUser.data = false;
      state.currentUser.error = false;
      state.currentUser.success = false;
    },
    currentUserSuccess: (state, action) => {
      state.currentUser.data = action.payload.response;
      state.currentUser.success = true;
    },
    currentUserFailed: (state, action) => {
      state.currentUser.data = null;
      state.currentUser.error = action.payload.error;
    },
  },
});

export const { currentUserStart, currentUserSuccess, currentUserFailed } =
  userSlice.actions;
export default userSlice.reducer;
