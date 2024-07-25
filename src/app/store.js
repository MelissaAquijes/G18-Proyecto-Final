import { configureStore } from "@reduxjs/toolkit";

import {swButtColSliceReducer,modBorderSliceReducer,
        footButtSliceReducer,cartPayButtSliceReducer,
        formInputSliceReducer} from "./exports";


export const globalStore = configureStore({
  reducer:{
    swButtonsColor: swButtColSliceReducer,
    modBordersColor: modBorderSliceReducer,
    footButtonColor: footButtSliceReducer,
    cartPayButtonFormat: cartPayButtSliceReducer,
    formInputs: formInputSliceReducer,
  },
});