import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import customerReducer from "../features/customers/customerSlice";
import startupReducer from "../features/startup/startupSlice";
import categoryReducer from "../features/category/categorySlice";
// import pCategoryReducer from "../features/pcategory/pcategorySlice";
// import bCategoryReducer from "../features/bcategory/bcategorySlice";
// import blogReducer from "../features/blogs/blogSlice";
// import colorReducer from "../features/color/colorSlice";
import enquiryReducer from "../features/enquiry/enquirySlice";
// import uploadReducer from "../features/upload/uploadSlice";
// import couponReducer from "../features/coupon/couponSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    customer: customerReducer,
    startup: startupReducer,
    category: categoryReducer,
    // pCategory: pCategoryReducer,
    // bCategory: bCategoryReducer,
    // blogs: blogReducer,
    // color: colorReducer,
    enquiry: enquiryReducer,
    // upload: uploadReducer,
    // coupon: couponReducer,
  },
});
