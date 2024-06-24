import {createSlice}from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    purpose : "To create counter",
    initialState : {
        value : 0
    },
    reducers :{
        increment : (prevState)=>{
            prevState.value = prevState.value + 1
        },
        decrementCounter : (prevState)=>{
            prevState.value -= 1
        }

    }
})

export const {increment,decrementCounter:decrement} = counterSlice.actions;
export default counterSlice.reducer;

