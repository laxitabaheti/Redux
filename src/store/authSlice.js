import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isauthenticate: true
};
const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn(state) {
      state.isauthenticate = true;
    },
    logOut(state) {
      state.isauthenticate = false;
    }
  }
});

export const AuthReducer = AuthSlice.reducer;
export const AuthActions = AuthSlice.actions;
