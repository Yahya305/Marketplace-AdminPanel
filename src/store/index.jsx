import { configureStore } from "@reduxjs/toolkit";
import policySlice from "./slices/policySlice";
import blogsSlice from "./slices/blogsSlice";

const store = configureStore({
    reducer:{
        policySlice:policySlice,
        blogsSlice:blogsSlice
    }
})

export default store