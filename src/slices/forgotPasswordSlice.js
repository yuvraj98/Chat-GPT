import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiConnector } from "../services/apiConnector";
import { endpoints } from "../services/apis";

const { FORGOT_PASSWORD_API } = endpoints;

export const forgotPassword = createAsyncThunk(
  "forgotPassword/forgotPassword",
  async ({ email }, { rejectWithValue }) => {
    try {
      const response = await apiConnector("POST", FORGOT_PASSWORD_API, { email });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const forgotPasswordSlice = createSlice({
  name: "forgotPassword",
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default forgotPasswordSlice.reducer;
