const BASE_URL = process.env.REACT_APP_BASE_URL;

export const endpoints = {
  SIGNUP_API: `${BASE_URL}/auth/signup`,
  LOGIN_API: `${BASE_URL}/auth/login`,
  FORGOT_PASSWORD_API: `${BASE_URL}/auth/forgot-password`,
  SEND_OTP_API: `${BASE_URL}/auth/send-otp`,
  VERIFY_OTP_API: `${BASE_URL}/auth/verify-otp`,
  RESET_PASSWORD_API: `${BASE_URL}/auth/reset-password`,
  BLOGS_API: `${BASE_URL}/blogs`,  // Assuming '/blogs' is the correct endpoint
  CONTACT_API: `${BASE_URL}/contact`
};
