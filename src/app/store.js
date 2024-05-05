import { configureStore } from "@reduxjs/toolkit";
import { counterSliceReducer } from "./slice/counterSlice";
 
export const globalStore = configureStore({
  reducer:{
    counter: counterSliceReducer
  },
});




