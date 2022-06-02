import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./counterSlise";


export default configureStore({
    reducer: {
        counter: counterReducer
    }
})