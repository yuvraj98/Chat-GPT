// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  signupData: {},
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signupStart(state) {
      state.loading = true;
      state.error = null;
    },
    signupSuccess(state, action) {
      state.signupData = action.payload;
      state.loading = false;
      state.error = null;
    },
    signupFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    setSignupData(state, action) {
      state.signupData = action.payload;
    },
  },
});

export const { signupStart, signupSuccess, signupFailure, setSignupData } = authSlice.actions;
export default authSlice.reducer;
