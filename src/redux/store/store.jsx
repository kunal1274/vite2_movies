import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/CounterSlice";
import dynamicCounterReducer from "../slice/DynamicCounterSlice";

export const reduxStore = configureStore({
    reducer : {
        counterFromStore : counterReducer,
        dynamicCounterFromStore : dynamicCounterReducer

    }
})

// export default reduxStore;
// export {reduxStore};