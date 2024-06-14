import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { forgotPassword } from "../../../slices/forgotPasswordSlice";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const { loading, error, success } = useSelector((state) => state.forgotPassword);

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(forgotPassword({ email })).unwrap();
      toast.success("Reset email sent");
    } catch (err) {
      toast.error(error || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-12 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Forgot Password</h2>
        <form onSubmit={handleOnSubmit} className="flex flex-col gap-y-6">
          <label className="w-full">
            <p className="mb-2 text-lg text-gray-700">
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
          <button
            type="submit"
            className="mt-6 bg-yellow-500 text-white py-4 px-8 rounded-lg font-medium text-lg hover:bg-yellow-600 transition-colors duration-300"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
        {success && <p className="mt-4 text-green-500">Email has been sent successfully</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
