import { configureStore } from "@reduxjs/toolkit";
import { navReducer } from './navslice';
import { authReducer } from "./authslice";

export const appStore = configureStore({
    reducer: {
        nav: navReducer,
        auth: authReducer
    }
})