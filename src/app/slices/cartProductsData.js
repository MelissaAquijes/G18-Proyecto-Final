import { createSlice } from "@reduxjs/toolkit";

const cartProductsDataSlice = createSlice({
  name:"cartProductDataSlice",
  initialState:{
    cartProductsArray:[],
    cartUnitsArray:[],
    cartTotalPrice:0,
    cartTotalUnits:0,
  },

  reducers:{
    setCartProductsArray: (state,action) => {
      // action: {type:"", payload:{}}
      state.cartProductsArray = action.payload;
    },  

    setCartUnitsArray: (state,action) => {
      state.cartUnitsArray = action.payload;
    },

    setCartTotalPrice: (state,action) => {
      state.cartTotalPrice = action.payload;
    },

    setCartTotalUnits: (state,action) => {
      state.cartTotalUnits = action.payload;
    }



  }
})

export const cartProductsDataSliceReducer = cartProductsDataSlice.reducer;
export const {setCartProductsArray,
              setCartUnitsArray,
              setCartTotalPrice,
              setCartTotalUnits} = cartProductsDataSlice.actions;