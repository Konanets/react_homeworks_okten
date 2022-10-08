import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {authService} from "../services";

const initialState = {
    isAuthenticated: false,
    error:''
}

const login = createAsyncThunk(
    'authSlice/login',
    async ({user}, {rejectWithValue,fulfillWithValue}) => {
        try {
            const {data} = await authService.login(user)
            return fulfillWithValue(data)
        } catch (e) {
            console.log(e)
            return rejectWithValue(e.response.data.detail)
        }
    }
)

const registration = createAsyncThunk(
    'authSlice/registration',
    async ({user}, {rejectWithValue}) => {
        try {
            await authService.registration(user)
        } catch (e) {
            return rejectWithValue(e.response.data.username[0])
        }
    }
)

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        logOut:(state)=>{
            state=initialState
            authService.removeTokens()
        },
        reloadLogin:(state, {payload})=>{
            state.isAuthenticated=payload
        }
    },
    extraReducers: builder => builder
        .addCase(login.fulfilled, (state, {payload}) => {
            authService.saveTokens(payload)
            state.isAuthenticated = true;
        })
        .addCase(login.rejected, (state, {payload}) => {
            state.error = payload
            state.isAuthenticated = false;
        })
        .addCase(registration.rejected, (state, {payload}) => {
            state.error = payload
        })
})

const {
    reducer: authReducer, actions: {
        logOut,
        reloadLogin
    }
} = authSlice

const authActions = {
    reloadLogin,
    logOut,
    login,
    registration
}

export {authReducer, authActions}

