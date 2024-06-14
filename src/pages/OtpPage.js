import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendOTP } from '../services/operations/authApi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const OtpPage = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, message } = useSelector((state) => state.otp);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(sendOTP(email));
      toast.success(response.message);
      navigate('/verify-otp');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
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
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send OTP'}
          </button>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          {message && <p className="text-green-500 text-sm mt-2">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default OtpPage;
