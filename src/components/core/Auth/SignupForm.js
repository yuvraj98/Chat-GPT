// SignupForm.js
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { signup } from "../../../services/operations/authApi";
import { setSignupData } from "../../../slices/authSlice";

const SignupForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const { firstname, lastname, username, email, password, confirmpassword } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      toast.error("Passwords do not match");
      return;
    }

    const signupData = { ...formData };
    console.log(signupData);
    try {
      await dispatch(signup(firstname, lastname, username, email, password, confirmpassword));
      dispatch(setSignupData(signupData));
      setFormData({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
      });
      toast.success("Signup successful!");
      navigate("/login"); // Replace with your desired route after signup
    } catch (error) {
      toast.error("Signup failed. Please try again.");
      navigate("/")
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>
        <form onSubmit={handleOnSubmit} className="flex flex-col gap-y-4">
          <div className="flex gap-x-4">
            <label className="w-full">
              <p className="mb-1 text-sm text-gray-700">
                First Name <sup className="text-pink-500">*</sup>
              </p>
              <input
                required
                type="text"
                name="firstname"
                value={firstname}
                onChange={handleOnChange}
                placeholder="Enter first name"
                className="form-style w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </label>
            <label className="w-full">
              <p className="mb-1 text-sm text-gray-700">
                Last Name <sup className="text-pink-500">*</sup>
              </p>
              <input
                required
                type="text"
                name="lastname"
                value={lastname}
                onChange={handleOnChange}
                placeholder="Enter last name"
                className="form-style w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </label>
          </div>
          <label className="w-full">
            <p className="mb-1 text-sm text-gray-700">
              Username <sup className="text-pink-500">*</sup>
            </p>
            <input
              required
              type="text"
              name="username"
              value={username}
              onChange={handleOnChange}
              placeholder="Enter username"
              className="form-style w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </label>
          <label className="w-full">
            <p className="mb-1 text-sm text-gray-700">
              Email Address <sup className="text-pink-500">*</sup>
            </p>
            <input
              required
              type="email"
              name="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Enter email address"
              className="form-style w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </label>
          <label className="relative w-full">
            <p className="mb-1 text-sm text-gray-700">
              Password <sup className="text-pink-500">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter Password"
              className="form-style w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 pr-10"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-10 cursor-pointer text-gray-500"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} />
              ) : (
                <AiOutlineEye fontSize={24} />
              )}
            </span>
          </label>
          <label className="relative w-full">
            <p className="mb-1 text-sm text-gray-700">
              Confirm Password <sup className="text-pink-500">*</sup>
            </p>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmpassword"
              value={confirmpassword}
              onChange={handleOnChange}
              placeholder="Confirm Password"
              className="form-style w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 pr-10"
            />
            <span
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-10 cursor-pointer text-gray-500"
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} />
              ) : (
                <AiOutlineEye fontSize={24} />
              )}
            </span>
          </label>
          <button
            type="submit"
            className="mt-6 bg-yellow-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-yellow-600 transition-colors duration-300"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
