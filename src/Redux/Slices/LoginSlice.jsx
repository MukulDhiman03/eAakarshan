import { createSlice } from "@reduxjs/toolkit";

const LogInSlice = createSlice({
  name: "login",
  initialState: {
    loggedIn: true,
  },
  reducers: {
    logIn: (state) => {
      state.loggedIn = true;
    },
    logOut: (state) => {
      state.loggedIn = false;
    },
  },
});
export const { logIn, logOut } = LogInSlice.actions;
export default LogInSlice.reducer;
