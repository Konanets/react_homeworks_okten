import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

import {carsService} from "../../services";

const initialState = {
    cars: [],
    carOnUpdate: null,
    loading: false,
    error: ''
}

const getCars = createAsyncThunk(
    'carSlice/addCars',
    async (_, {fulfillWithValue}) => {
        try {
            const {data} = await carsService.getCars()
            return data
        } catch (e) {
            return fulfillWithValue(e.responce.data)
        }
    }
)

const deleteCar = createAsyncThunk(
    'carSlice/deleteCar',
    async ({id}, {fulfillWithValue}) => {
        try {
            await carsService.deleteCar(id)
            return id
        } catch (e) {
            return fulfillWithValue(e.responce.data)
        }
    }
)

const updateCar = createAsyncThunk(
    'carSlice/updateCar',
    async ({id,car}, {fulfillWithValue,dispatch}) => {
        try {
            const {data} = await carsService.updateCar(id, car)
            dispatch(setOnUpdate(null))
            return data
        } catch (e) {
            return fulfillWithValue(e.responce.data)
        }
    }
)

const addCar = createAsyncThunk(
    'carSlice/addCar',
    async ({car}, {fulfillWithValue}) => {
        try {
            const {data} = await carsService.addCar(car)
            return data
        } catch (e) {
            return fulfillWithValue(e.responce.data)
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setOnUpdate: (state, {payload}) => {
            state.carOnUpdate = payload
        }
    },
    extraReducers: builder =>
        builder.addCase(addCar.fulfilled, (state, {payload}) => {
             state.cars=[...state.cars,payload]
        })
            .addCase(updateCar.fulfilled, (state, {payload}) => {
                const index = state.cars.findIndex(cars => cars.id === payload.id)
                if(index!==-1) state.cars[index]=payload
            })
            .addCase(deleteCar.fulfilled, (state, {payload}) => {
                const index = state.cars.findIndex(cars => cars.id === payload)
                if(index!==-1) state.cars.splice(index, 1)

            })
            .addCase(getCars.fulfilled, (state, {payload}) => {
                state.cars = payload
            })
})


const {reducer:carsReducer,actions:{
    setOnUpdate
}}=carSlice

const carsActions={
    setOnUpdate,
    addCar,
    deleteCar,
    getCars,
    updateCar
}

export {carsReducer,carsActions}

