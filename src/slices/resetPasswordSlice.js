import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiConnector } from "../services/apiConnector";
import { endpoints } from "../services/apis";

const { RESET_PASSWORD_API } = endpoints;

export const resetPassword = createAsyncThunk(
  "resetPassword/resetPassword",
  async ({ token, newPassword }, { rejectWithValue }) => {
    try {
      const response = await apiConnector("POST", RESET_PASSWORD_API, { token, newPassword });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const resetPasswordSlice = createSlice({
  name: "resetPassword",
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default resetPasswordSlice.reducer;
