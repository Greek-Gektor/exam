import { configureStore } from '@reduxjs/toolkit'
import bicyclesReducer from "./counterSlise";


export default configureStore({
    reducer: {
        bicycles: bicyclesReducer
    }
})