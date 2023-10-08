import {configureStore} from "@reduxjs/toolkit";
import {reducer} from "@/store/reducer";
import thunk from "redux-thunk";
import { cartItemsApi} from "@/slices/cartSlice";
import { setupListeners } from '@reduxjs/toolkit/query'


export const store = configureStore({
    reducer:reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cartItemsApi.middleware),
})

setupListeners(store.dispatch)
export  type RootState = ReturnType<typeof store.getState>