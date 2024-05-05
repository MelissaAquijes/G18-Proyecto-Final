import { createSlice } from "@reduxjs/toolkit"; 

const counterSlice = createSlice({
  name: "counter",
  initialState:{
    value: 0,
  },
  reducers: {
    addition: (currentState) => {
      currentState.value += 1;
    },
  },
});

export const { addition } = counterSlice.actions;
export const counterSliceReducer = counterSlice.reducer;

