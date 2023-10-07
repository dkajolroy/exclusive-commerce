import {configureStore} from "@reduxjs/toolkit";
import {reducer} from "@/store/reducer";
import thunk from "redux-thunk";


export const store = configureStore({
    reducer:reducer,
    middleware:[thunk]
})


export  type RootState = ReturnType<typeof store.getState>