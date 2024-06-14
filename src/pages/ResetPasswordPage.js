import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../services/operations/authApi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otp, setOtp] = useState('');
  const { loading, error, message } = useSelector((state) => state.otp);
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }
    try {
      await dispatch(resetPassword({ email: localStorage.getItem('resetEmail'), newPassword: password }));
      toast.success('Password reset successful. Please log in with your new password.');
      navigate('/login');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Reset Password</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
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
          <label className="w-full">
            <p className="mb-1 text-sm text-gray-700">
              New Password <sup className="text-pink-500">*</sup>
            </p>
            <input
              required
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
              className="form-style w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </label>
          <label className="w-full">
            <p className="mb-1 text-sm text-gray-700">
              Confirm New Password <sup className="text-pink-500">*</sup>
            </p>
            <input
              required
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              className="form-style w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </label>
          <button
            type="submit"
            className="mt-6 bg-yellow-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-yellow-600 transition-colors duration-300"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
