import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./slices";


const reducer=combineReducers({
    userReducer
})

const store = configureStore({
    reducer
})

export {store}