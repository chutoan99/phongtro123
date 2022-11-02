import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import postReducer from "./postSlice";
import areaReducer from "./area";
import priceReducer from "./price";
import provinceReducer from "./province";
import categoryReducer from "./category";
import userReducer from "./user";

const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    price: priceReducer,
    area: areaReducer,
    province: provinceReducer,
    category: categoryReducer,
    user: userReducer,
    // tên // biến
  },
});

export default store;
