import { createSlice } from "@reduxjs/toolkit";

const areaSlice = createSlice({
  name: "area",
  initialState: {
    data: null,
    error: false,
    success: false,
  },
  reducers: {
    // area
    fetchAreaStart: (state) => {
      state.error = false;
      state.success = false;
      state.data = null;
    },
    fetchAreaSuccess: (state, action) => {
      state.success = true;
      state.data = action.payload.sort((a, b) => {
        return a.order - b.order;
      });
    },
    fetchAreaFailed: (state, action) => {
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { fetchAreaStart, fetchAreaSuccess, fetchAreaFailed } =
  areaSlice.actions;
export default areaSlice.reducer;
