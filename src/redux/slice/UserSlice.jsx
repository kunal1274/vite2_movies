import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name :"User Details",
    purpose:"Getting the user details from mock api",
    initialState:{
        status:"Idle",
        user:null,
        error:null
    },
    reducers:{
        getUserDetails: (prevState,actionObj)=>{
            console.log("inside reducers,updating state")
            prevState.status = "Loading";
        },
        getUserSuccess:(prevState,actionObj)=>{
            console.log("inside reducer success")
            prevState.user = actionObj.payload
            prevState.status ="Success"
        },
        getUserFailure:(prevState,actionObj)=>{
            console.log("inside reducer failure")
            prevState.error = actionObj.payload
            prevState.status ="Failed"
        }

    }
})

export default userSlice;