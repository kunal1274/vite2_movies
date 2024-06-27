import { createSlice } from "@reduxjs/toolkit";

export const dynamicCounterSlice = createSlice({
    name : 'Dynamic Counter',
    purpose : " This will be a conditional counter . It can't go negative and has reset function as well to reset to initial state.",
    initialState:{
        value : 0,
    },
    reducers:{
        inc:(prevState)=>{
            prevState.value += 1
        },
        dec: (prevState) =>{
            if(prevState.value>0){
            prevState.value -= 1
            }
            
        },
        resetting : (prevState)=>{
            prevState.value = 0
        }

    }
})

export const {inc:dynamicIncrement,dec:dynamicDecrement,resetting : dynamicReset} = dynamicCounterSlice.actions;

export default dynamicCounterSlice.reducer;