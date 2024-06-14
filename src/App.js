import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import About from "./pages/About";
import Navbar from "./components/common/Navbar";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import OtpPage from './pages/OtpPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import BlogPage from "./pages/BlogPage";
import BlogDetail from "./components/core/Blog/BlogDetails";
import AddBlog from "./pages/AddBlog";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="flex min-h-screen w-screen flex-col bg-richblack-900 font-inter check">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="about" element={<About />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/blogs" element = {<BlogPage />}> </Route>
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/add-blogs" element={<AddBlog />} />
        <Route path = "/contact" element = {<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
