import { createSlice } from '@reduxjs/toolkit';
import { sendOTP, verifyOTP } from '../services/operations/authApi';

const initialState = {
  loading: false,
  error: null,
  message: null,
};

const otpSlice = createSlice({
  name: 'otp',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendOTP.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendOTP.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(sendOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(verifyOTP.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOTP.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(verifyOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default otpSlice.reducer;
