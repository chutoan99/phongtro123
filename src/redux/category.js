import { createSlice } from "@reduxjs/toolkit";
const categorySlice = createSlice({
  name: "category",
  initialState: {
    data: null,
    error: false,
    success: false,
  },
  reducers: {
    // category
    fetchCategoryStart: (state) => {
      state.error = false;
      state.success = false;
      state.data = null;
    },
    fetchCategorySuccess: (state, action) => {
      state.success = true;
      state.data = action.payload;
    },
    fetchCategoryFailed: (state, action) => {
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { fetchCategoryStart, fetchCategorySuccess, fetchCategoryFailed } =
  categorySlice.actions;
export default categorySlice.reducer;
