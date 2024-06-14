import React from 'react';
import ai from "../../../assets/AIHome1.png";

import HighlightedText from '../../common/HighlightedText';

const Header = () => {
  return (
    <header className="flex flex-col-reverse w-11/12 mx-auto md:flex-row items-start justify-start py-8 px-4 md:px-16 ">
      <div className="flex flex-col items-start gap-8 text-start md:w-1/2 text-richblack-5 font-inter mt-24">
        <h1 className="text-4xl font-bold leading-tight md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-richblack-100 to-indigo-500 to-blue-500 shadow-md shadow-richblack-700">
        <HighlightedText text = {"The Significance of AI Blogs in Modern Learning"}></HighlightedText>
        </h1>
        <p className="text-richblack-5 text-lg leading-relaxed md:text-xl" style={{
          backgroundImage: "linear-gradient(to right, #F1F2FF, #585D69)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
        AI Blogging harnesses the transformative power of artificial intelligence to revolutionize content creation and dissemination. By leveraging advanced AI models like GPT-3, blogs become more insightful and engaging, catering to diverse audiences with precision and depth.
        </p>
        <div className="flex flex-start gap-4 md:gap-8">
          <input
            type="email"
            placeholder="Your Email Address"
            className="rounded-md px-4 py-2 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
          type="button"
          className="rounded-md px-4 py-2 bg-richblack-800 hover:bg-gradient-to-r from-richblack-800 to-richblack-700 text-white font-bold transition duration-300 ease-in-out transform hover:scale-110 shadow-md shadow-richblack-500 cursor-pointer"
       
          onMouseEnter={(e) => {
            e.target.style.backgroundPosition = "left bottom";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundPosition = "right bottom";
          }}
        >
          Get Started
        </button>

        </div>
        
      </div>
      <div className="flex-shrink-0 w-full md:w-1/2 rounded-xl mt-20 pl-10 ml-24">
        <img src={ai} alt="AI" className="w-full h-full object-cover rounded-xl ml-10 mb-7" />
      </div>
    </header>
  );
};

export default Header;