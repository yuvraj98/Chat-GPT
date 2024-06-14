// store.js
import { combineReducers } from "@reduxjs/toolkit"
import authSlice from "../slices/authSlice";
import otpSlice from "../slices/otpSlice";;


const rootReducer = combineReducers({
  auth: authSlice,
  otp: otpSlice,
 
})

export default rootReducer
