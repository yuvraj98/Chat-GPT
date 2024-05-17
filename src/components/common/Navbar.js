import React from 'react'
import { useState } from 'react';
import logo from '../../assets/logo.svg'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="flex bg-richblack-800 justify-between items-center py-4 px-8 md:px-16 shadow-lg shadow-richblack-600">
      <div className="flex items-center mr-4">
        <img src={logo} alt="GPT3 Logo" className="w-16 h-4" />
      </div>

      <div className="hidden md:flex items-center space-x-6">
        <a href="#home" className="text-richblack-5  hover:text-richblack-200 text-[16px] font-inter">
          Home
        </a>
        <a href="#wgpt3" className="text-richblack-5 hover:text-richblack-200 text-[16px] font-inter">
          What is GPT3?
        </a>
        <a href="#possibility" className="text-richblack-5 hover:text-richblack-200 text-[16px] font-inter">
          Open AI
        </a>
        <a href="#features" className="text-richblack-5 hover:text-richblack-200 text-[16px] font-inter">
          Case Studies
        </a>
        <a href="#blog" className="text-richblack-5 hover:text-richblack-200 text-[16px] font-inter">
          Library
        </a>
      </div>

      <div className="flex items-center md:hidden">
        <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
      </div>

      <div className={`${toggleMenu ? 'block' : 'hidden'} fixed top-0 right-0 w-full bg-gray-800 p-4 md:static md:w-auto`}>
        <div className="flex flex-col space-y-4">
          <a href="#home" className="text-white text-xl font-medium">
            Home
          </a>
          <a href="#wgpt3" className="text-white text-xl font-medium">
            What is GPT3?
          </a>
          <a href="#possibility" className="text-white text-xl font-medium">
            Open AI
          </a>
          <a href="#features" className="text-white text-xl font-medium">
            Case Studies
          </a>
          <a href="#blog" className="text-white text-xl font-medium">
            Library
          </a>
        </div>
        <div className="flex items-center mt-4">
          <p className="text-white text-xl font-medium">Sign in</p>
          <button type="button" className="flex items-center px-4 py-2 bg-red-500 text-white font-medium rounded-md ml-4">
            Sign up
          </button>
        </div>
      </div>

      <div className="hidden md:flex items-center space-x-4">
      <button type="button" className="flex items-center px-4 py-2 bg-richblack-700 text-richblack-5  font-inter rounded-md mx-auto hover:bg-richblack-600 scale-95 transition-all duration-200">
          Login
        </button>
        <button type="button" className="flex items-center px-4 py-2 bg-richblack-700 text-richblack-5 font-inter rounded-md mx-auto hover:bg-richblack-600 scale-95 transition-all duration-200">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;