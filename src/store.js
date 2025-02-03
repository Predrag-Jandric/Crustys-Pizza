import { configureStore } from "@reduxjs/toolkit";
import userReducer, {
  loadUserFromLocalStorage,
} from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

store.dispatch(loadUserFromLocalStorage());

export default store;
