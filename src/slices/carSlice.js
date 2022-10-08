import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carsService} from "../services";
import {LoginFrom} from "../components";

const initialState = {
    cars: [],
    carForUpdate: null,
    loading: false,
    error: ''
}

const getCars = createAsyncThunk(
    'carSlice/getCars',
    async (_, {fulfillWithValue,rejectWithValue}) => {
        try {
            const {data:{data}} = await carsService.getCars()
            return fulfillWithValue(data)
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getCars.fulfilled,(state, {payload})=>{
            console.log(payload)
            state.cars=payload
            state.loading=false
        })
        .addCase(getCars.pending,(state)=>{
            state.loading=true
        })
        .addCase(getCars.rejected,(state, {payload})=>{
            state.error=payload
        })

})


const {reducer:carReducer,actions:{

}}=carSlice

const carAction={
    getCars
}

export {carReducer,carAction}