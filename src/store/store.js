import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {carsReducer} from "./slices";

const reducer = combineReducers({
    carsReducer
})

export const store = configureStore({
    reducer
})