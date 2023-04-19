import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/user/userSlice";
import productReducer from "../features/products/productSlice";
import blogReducer from "../features/blogs/blogSlice";
import  doctorReducer  from "../features/doctors/doctorSlice";



export const store = configureStore({
    reducer: {
        auth: authReducer,
        product: productReducer,
        blog: blogReducer,
        doctor: doctorReducer,
    },

});
