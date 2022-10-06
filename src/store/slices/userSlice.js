import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userService} from "../../services";


const initialState={
    users:[],
    user:null,
    loading:false,
    error:''
};


const addUsers=createAsyncThunk(
    'userSlice/addUsers',
    async (_,{fulfillWithValue})=>{
        try {
            const {data}=await userService.getUsers();
            return data
        }catch (e) {
            return fulfillWithValue(e.responce.data)
        }
    }
);


const addUser = createAsyncThunk(
    'userSlice/addUser',
    async ({id},{fulfillWithValue})=>{
        try {
            const {data} = await userService.getUser(id)
            return data
        }catch (e) {
            return fulfillWithValue(e.responce.data)
        }
    }
)




const userSlice=createSlice({
    name:'userSlice',
    initialState,
    reducers:{
        deleteUser:(state, {payload})=>{
            const index=state.users.findIndex((user)=>user.id===payload)
            state.users.slice(index,1)
        }
    },
    extraReducers:builder => builder
        .addCase(addUsers.fulfilled,(state, {payload})=>{
            state.users=payload
            state.loading=true
        })
        .addCase(addUsers.pending,(state)=>{
            state.loading=true
        })
        .addCase(addUsers.rejected,(state, {payload})=>{
            state.error=payload
        })
        .addCase(addUser.fulfilled,(state,{payload})=>{
            state.user=payload
        })
});


const {reducer:userReducer,
    actions:{
        deleteUser,
    }
}=userSlice

const userActions={
    deleteUser,
    addUsers,
    addUser
}

export {userActions,userReducer}