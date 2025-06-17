import { configureStore } from "@reduxjs/toolkit";
import {  } from "reduxjs/toolkit";
const store=configureStore({
    reducer: {
        counter: counterSlice.reducer, //jo counterSlice.js me reducer hai usko yaha import kiya hai
    },
})


