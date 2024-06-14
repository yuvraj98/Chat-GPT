import React from 'react';
import { useState } from 'react';
import logo from '../../assets/logo.svg';
import { RiMenu3Line } from 'react-icons/ri';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({ isLoggedIn }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate(); // Hook to navigate to different routes
  const location = useLocation();
  // Function to handle login action
  const handleLogin = () => {
    navigate("/login"); // Navigate to the login route
  }

  // Function to handle signup action
  const handleSignup = () => {
    navigate("/signup"); // Navigate to the signup route
  }

  // Function to handle navigation to the About page
  const handleAbout = () => {
    navigate("/about"); // Navigate to the about route
  }

  // Function to handle navigation to the Home page
  const handleHome = () => {
    navigate("/"); // Navigate to the home route
  }

  // Function to handle navigation to the Home page
  const handleLogout = () => {
    navigate("/"); // Navigate to the home route
  }
  const hideNavbar = location.pathname === '/blogs';

  if (hideNavbar) {
    return null; // Return null to hide the Navbar
  }

  return (
    <div className="flex bg-richblack-800 justify-between items-center py-4 px-8 md:px-16 shadow-lg shadow-richblack-600">
      <div className="flex items-center mr-4">
        <img src={logo} alt="GPT3 Logo" className="w-16 h-4" />
      </div>

      {/* Desktop navigation links */}
      <div className="hidden md:flex items-center space-x-6">
        <NavLink to="/" onClick={handleHome}>Home</NavLink>
        <NavLink to="/about" onClick={handleAbout}>About</NavLink>
        <NavLink to="/blogs">Blogs</NavLink>
        <NavLink to="/add-blogs">Add Blogs</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      {/* Mobile menu icon */}
      <div className="flex items-center md:hidden">
        <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
      </div>

      {/* Mobile menu */}
      <div className={`${toggleMenu ? 'block' : 'hidden'} fixed top-0 right-0 w-full bg-gray-800 p-4 md:static md:w-auto`}>
        <div className="flex flex-col space-y-4">
          <NavLink to="/" onClick={() => setToggleMenu(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setToggleMenu(false)}>About</NavLink>
          <NavLink to="/blogs" onClick={() => setToggleMenu(false)}>Blogs</NavLink>
          <NavLink to="/add-blogs" onClick={() => setToggleMenu(false)}>Add Blogs</NavLink>
          <NavLink to="/contact" onClick={() => setToggleMenu(false)}>Contact</NavLink>
        </div>
        {/* Conditional rendering for login/logout button based on user's authentication status */}
        {isLoggedIn ? (
          <button type="button" className="px-4 py-2 bg-red-500 text-white font-medium rounded-md ml-4" onClick={handleLogout}>Logout</button>
        ) : (
          <div className="flex items-center mt-4">
            <p className="text-white text-xl font-medium">Sign in</p>
            <button type="button" className="flex items-center px-4 py-2 bg-red-500 text-white font-medium rounded-md ml-4" onClick={handleSignup}>Sign up</button>
          </div>
        )}
      </div>

      {/* Desktop login/logout buttons */}
      <div className="hidden md:flex items-center space-x-4">
        {isLoggedIn && <button onClick={handleLogout} type="button" className="px-4 py-2 bg-richblack-700 text-richblack-5 font-inter rounded-md mx-auto hover:bg-richblack-600 scale-95 transition-all duration-200">Logout</button>}
        {!isLoggedIn && (
          <>
            <button onClick={handleLogin} type="button" className="px-4 py-2 bg-richblack-700 text-richblack-5 font-inter rounded-md mx-auto hover:bg-richblack-600 scale-95 transition-all duration-200">Login</button>
            <button onClick={handleSignup} type="button" className="px-4 py-2 bg-richblack-700 text-richblack-5 font-inter rounded-md mx-auto hover:bg-richblack-600 scale-95 transition-all duration-200">Sign up</button>
          </>
        )}
      </div>
    </div>
  );
};

// Component to handle navigation links with underline effect for active link
const NavLink = ({ to, children, onClick }) => {
  const location = useLocation(); // Get the current location
  
  return (
    <a
      href={to}
      onClick={onClick}
      className={`text-richblack-5 hover:text-richblack-200 text-[16px] font-inter ${location.pathname === to ? 'underline' : ''}`}
    >
      {children}
    </a>
  );
};

export default Navbar;
