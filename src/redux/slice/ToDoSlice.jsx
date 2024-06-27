import {createSlice} from '@reduxjs/toolkit';

const toDoSlice = createSlice({
    name : "To Do",
    purpose : "Preparing a To Do List",
    initialState : {
        taskValue : "",
        textLength:0,
        todoList :["task4","task5","task6"]
    },
    reducers:{
        updateInputTaskText : (prevState,dispatchedObj)=>{
            // console.log(dispatchedObj.payload)
            // console.log(lengthObj.payload)
            const {text,textLength} = dispatchedObj.payload;
            // prevState.taskValue = dispatchedObj.payload;
            prevState.taskValue = `${text}`;
            prevState.textLength= textLength;
        },
        addTheTask:(prevState,dispatchedObj)=>{
            const newTaskList = [...prevState.todoList,`${dispatchedObj.payload}(${prevState.textLength})`]
            prevState.todoList = newTaskList;
            prevState.taskValue="";
        }

    }

})

export default toDoSlice;