import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from './reducer';

export default configureStore({
    reducer: {
        task: tasksReducer
    },
})