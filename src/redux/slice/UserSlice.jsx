import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name :"User Details",
    purpose:"Getting the user details from mock api",
    initialState:{
        status:"idle",
        user:null,
        error:null
    },
    reducers:{
        getUserDetails: (prevState,actionObj)=>{
            prevState.status = "loading";
        }

    }
})

export default userSlice;