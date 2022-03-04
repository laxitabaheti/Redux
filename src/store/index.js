// import { createStore } from "redux";

// // const redux = require("redux");

// const initialState = {
//   counter: 0,
//   showCounter: true
// };
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter
//     };
//   }
//   if (action.type === "toggle") {
//     return { counter: state.counter, showCounter: !state.showCounter };
//   }
//   return state;
// };

// const store = createStore(counterReducer);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import { CounterReducer } from "./counterSlice";
import { AuthReducer } from "./authSlice";

const store = configureStore({
  reducer: {
    counter: CounterReducer,
    auth: AuthReducer
  }
});

export default store;
