import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/CounterSlice";
import dynamicCounterReducer from "../slice/DynamicCounterSlice";
import toDoSlice from "../slice/ToDoSlice";
import userSlice from "../slice/UserSlice";
import userMiddleware from "../middleware/userMiddleware";

export const reduxStore = configureStore({
    reducer : {
        counterFromStore : counterReducer,
        dynamicCounterFromStore : dynamicCounterReducer,
        toDoSliceState : toDoSlice.reducer,
        userSliceState : userSlice.reducer,

    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(userMiddleware),
    
})

// export default reduxStore;
// export {reduxStore};