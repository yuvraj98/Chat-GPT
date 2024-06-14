import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendOTP, verifyOTP } from '../services/operations/authApi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const { loading, error, message } = useSelector((state) => state.auth);

  const handleSendOTP = async (e) => {
    e.preventDefault();
    try {
      await dispatch(sendOTP(email));
      toast.success('OTP sent to your email. Check your inbox.');
    } catch (error) {
      toast.error('Failed to send OTP. Please try again.');
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    try {
      await dispatch(verifyOTP({ email, otp }));
      toast.success('OTP verified successfully.');
      navigate('/reset-password');
    } catch (error) {
      toast.error('Failed to verify OTP. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Forgot Password</h2>
        <form onSubmit={handleSendOTP} className="flex flex-col gap-y-4">
          <label className="w-full">
            <p className="mb-1 text-sm text-gray-700">
              Email Address <sup className="text-pink-500">*</sup>
            </p>
            <input
              required
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="form-style w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </label>
          <button
            type="submit"
            className="mt-6 bg-yellow-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-yellow-600 transition-colors duration-300"
          >
            Send OTP
          </button>
        </form>

        {/* OTP Verification Section */}
        <form onSubmit={handleVerifyOTP} className="mt-6 flex flex-col gap-y-4">
          <label className="w-full">
            <p className="mb-1 text-sm text-gray-700">
              OTP <sup className="text-pink-500">*</sup>
            </p>
            <input
              required
              type="text"
              name="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="form-style w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
