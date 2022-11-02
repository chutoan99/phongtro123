import { createSlice } from "@reduxjs/toolkit";

const provinceSlice = createSlice({
  name: "province",
  initialState: {
    data: null,
    error: false,
    success: false,
  },
  reducers: {
    // province
    fetchProvinceStart: (state) => {
      state.error = false;
      state.success = false;
      state.data = null;
    },
    fetchProvinceSuccess: (state, action) => {
      state.success = true;
      state.data = action.payload;
    },
    fetchProvinceFailed: (state, action) => {
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { fetchProvinceStart, fetchProvinceSuccess, fetchProvinceFailed } =
  provinceSlice.actions;
export default provinceSlice.reducer;
