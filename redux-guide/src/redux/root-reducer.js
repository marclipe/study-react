import { combineReducers } from "redux";
import { useReducer } from "./user/reducer";
import cartReducer from "./cart/slice";

export const rootReducer = combineReducers({ 
  user: useReducer, 
  cart: cartReducer
});