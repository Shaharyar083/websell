import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Login: false,
};

export const state = createSlice({
  name: "state",
  initialState: initialState,

  reducers: {
    setLogin: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const { setLogin } = state.actions;

export default state.reducer;
