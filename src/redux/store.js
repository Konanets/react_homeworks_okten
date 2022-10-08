import {configureStore} from "@reduxjs/toolkit";
import {authReducer, carReducer} from "../slices";


const rootReducer = {
    authReducer,
    carReducer
}

export const store = configureStore({
    reducer: rootReducer
})