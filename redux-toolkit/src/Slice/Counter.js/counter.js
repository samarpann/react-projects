import { createSlice } from "reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",  // name of the slice
  initialState,  // initial state of the slice 
    reducers: { // reducers of the slice
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});