import {createSlice} from "@reduxjs/toolkit";


const initialState:Product[]=[]
  const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers: {
        addtoCart:(state,payload) =>{

        },
        removeFormCart:(state,payload) =>{

        },
        increment:(state,payload) =>{

        },
        decrement:(state,payload) =>{

        }
    }
})

export  const {increment,decrement,removeFormCart,addtoCart} = cartSlice.actions
export  default  cartSlice.reducer