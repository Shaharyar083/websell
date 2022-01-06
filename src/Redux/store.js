import { configureStore } from "@reduxjs/toolkit";

// import all reducer here
import state from "./State";

export const store = configureStore({
  reducer: {
    //   general syntax to pass all reducer to store
    state: state,
  },
});
