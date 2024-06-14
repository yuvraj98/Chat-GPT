import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { login } from "../../../services/operations/authApi"; // Import the login function

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const { email, password } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(formData.email, formData.password);
      toast.success(response.message);
      navigate("/"); // Redirect to home page after login
    } catch (error) {
      toast.error("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-12 rounded-lg shadow-lg w-full max-w-2xl"> {/* Increased padding and width */}
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Login</h2> {/* Increased font size and margin */}
        <form onSubmit={handleOnSubmit} className="flex flex-col gap-y-6"> {/* Increased gap between form fields */}
          <label className="w-full">
            <p className="mb-2 text-lg text-gray-700"> {/* Increased font size and margin */}
              Email Address <sup className="text-pink-500">*</sup>
            </p>
            <input
              required
              type="email"
              name="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Enter email address"
              className="form-style w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" 
            />
          </label>
          <label className="relative w-full">
            <p className="mb-2 text-lg text-gray-700"> 
              Password <sup className="text-pink-500">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter Password"
              className="form-style w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 pr-12" 
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-4 top-14 cursor-pointer text-gray-500"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} />
              ) : (
                <AiOutlineEye fontSize={24} />
              )}
            </span>
          </label>
          <Link to="/forgot-password" className="text-md text-blue-500 mt-2 self-end"> {/* Increased font size */}
            Forgot Password?
          </Link>
          <button
            type="submit"
            className="mt-8 bg-yellow-500 text-white py-4 px-8 rounded-lg font-medium text-lg hover:bg-yellow-600 transition-colors duration-300"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
