import { configureStore } from "@reduxjs/toolkit";
import { navReducer } from './navslice';
import { authReducer } from "./authslice";
import { paymentReducer } from "./paymentslice";

export const appStore = configureStore({
    reducer: {
        nav: navReducer,
        auth: authReducer,
        pay: paymentReducer
    }
})