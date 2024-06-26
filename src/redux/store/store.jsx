import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/CounterSlice";
import dynamicCounterReducer from "../slice/DynamicCounterSlice";
import toDoSlice from "../slice/ToDoSlice";
import userSlice from "../slice/UserSlice";

export const reduxStore = configureStore({
    reducer : {
        counterFromStore : counterReducer,
        dynamicCounterFromStore : dynamicCounterReducer,
        toDoSliceState : toDoSlice.reducer,
        userSliceState : userSlice.reducer,

    }
})

// export default reduxStore;
// export {reduxStore};