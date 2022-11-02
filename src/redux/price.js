import { createSlice } from "@reduxjs/toolkit";

const priceSlice = createSlice({
  name: "price",
  initialState: {
    data: null,
    error: false,
    success: false,
  },
  reducers: {
    // price
    fetchPriceStart: (state) => {
      state.error = false;
      state.success = false;
      state.data = null;
    },
    fetchPriceSuccess: (state, action) => {
      state.success = true;
      state.data = action.payload.sort((a, b) => {
        return a.order - b.order;
      });
    },
    fetchPriceFailed: (state, action) => {
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { fetchPriceStart, fetchPriceSuccess, fetchPriceFailed } =
  priceSlice.actions;
export default priceSlice.reducer;
