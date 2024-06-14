const express = require('express');
const { signup, login, sendOTP, verifyOTP, resetPassword } = require('../controller/Auth');
const { validateSignup, validateLogin, validatePasswordReset } = require('../middleware/validation');

const router = express.Router();

router.post('/signup', validateSignup, signup);
router.post('/login', validateLogin, login);
router.post('/send-otp', sendOTP);
router.post('/verify-otp', verifyOTP);
router.post('/reset-password', validatePasswordReset, resetPassword);

module.exports = router;
