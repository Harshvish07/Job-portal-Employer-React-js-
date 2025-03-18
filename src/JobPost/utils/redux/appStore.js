// import { configureStore } from '@reduxjs/toolkit';
// import languageReducer from './languageSlice';

// const store = configureStore({
//   reducer: {
//     language: languageReducer,
//   },
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageSlice";
import loginReducer from "./loginSlice";

const store = configureStore({
  reducer: {
    language: languageReducer,
    login: loginReducer
  }
});

export default store;
