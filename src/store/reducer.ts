import { cartItemsApi} from "@/slices/cartSlice";
import toggleSlice from "@/slices/toggleSlice";

export  const reducer ={
    // cartItems:cartSlice,
    toggleState:toggleSlice,
    [cartItemsApi.reducerPath]: cartItemsApi.reducer,

}