import { configureStore } from "@reduxjs/toolkit";

import {swButtColSliceReducer,modBorderSliceReducer,
        footButtSliceReducer,cartPayButtSliceReducer} from "./exports";


export const globalStore = configureStore({
  reducer:{
    swButtonsColor: swButtColSliceReducer,
    modBordersColor: modBorderSliceReducer,
    footButtonColor: footButtSliceReducer,
    cartPayButtonFormat: cartPayButtSliceReducer,
  },
});