import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from '../redux/CounterSlice'

export const store = configureStore({
    reducer: {
        counter: CounterReducer,
    }
});