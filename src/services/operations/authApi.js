
import { endpoints } from "../apis";
import {apiConnector} from "../apiConnector"
import { signupStart, signupSuccess, signupFailure } from '../../slices/authSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

const {
  SIGNUP_API,
  LOGIN_API,
  SEND_OTP_API, 
  VERIFY_OTP_API, 
  RESET_PASSWORD_API,
  FORGOT_PASSWORD_API
} = endpoints;

export const signup = (firstname, lastname, username, email, password, confirmpassword) => async (dispatch) => {
  dispatch(signupStart());
  try {
    const response = await apiConnector("POST",SIGNUP_API, {
      firstname,
      lastname,
      username,
      email,
      password,
      confirmpassword
    });
    dispatch(signupSuccess(response.data));
    return response.data;
  } catch (error) {
    dispatch(signupFailure(error.response.data));
    throw error;
  }
};

  export const login = async (email,password) => {
    try {
      const response = await apiConnector('POST', LOGIN_API , {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };
  

  export const sendOTP = createAsyncThunk('sendOTP', async (email, thunkAPI) => {
    try {
      const response = await apiConnector('POST', SEND_OTP_API, { email });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  });
  
  export const verifyOTP = createAsyncThunk('verifyOTP', async (data, thunkAPI) => {
    try {
      const response = await apiConnector('POST', VERIFY_OTP_API, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  });
  
  export const resetPassword = createAsyncThunk('resetPassword', async (data, thunkAPI) => {
    try {
      const response = await apiConnector('POST', RESET_PASSWORD_API, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  });
  export const forgotPassword = createAsyncThunk('auth/forgotPassword', async (email, thunkAPI) => {
    try {
      const response = await apiConnector('POST', FORGOT_PASSWORD_API, { email });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  });