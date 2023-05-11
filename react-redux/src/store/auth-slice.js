import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { authStatus: false };

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.authStatus = true;
    },
    logout(state) {
      state.authStatus = false;
    },
  },
});

export default authSlice;
