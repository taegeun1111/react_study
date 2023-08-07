import {configureStore, createSlice} from "@reduxjs/toolkit";

const isAuthenticated = {isAuthenticated: false}

const authSlice = createSlice({
  name: 'authentication',
  initialState: isAuthenticated,
  reducers: {
    login(state) {
      state.isAuthenticated = true
    },
    logout(state) {
      state.isAuthenticated = false
    }
  }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;