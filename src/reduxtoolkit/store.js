import { configureStore } from "@reduxjs/toolkit";
import { navReducer } from './navslice';

export const appStore = configureStore({
    reducer: {
        nav: navReducer
    }
})