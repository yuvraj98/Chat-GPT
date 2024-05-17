import React from 'react';
import ai from "../../../assets/ai.png";
import people from "../../../assets/people.png";

const Header = () => {
  return (
    <header className="flex flex-col-reverse w-11/12 mx-auto md:flex-row items-start justify-start py-8 px-4 md:px-16 ">
      <div className="flex flex-col items-start gap-8 text-start md:w-1/2 text-richblack-5 font-inter mt-24">
        <h1 className="text-4xl font-bold leading-tight md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-richblack-100 to-indigo-500 to-blue-500 shadow-md shadow-richblack-700">
          Let's Build Something Amazing with Intern OpenAI
        </h1>
        <p className="text-richblack-5 text-lg leading-relaxed md:text-xl" style={{
          backgroundImage: "linear-gradient(to right, #F1F2FF, #585D69)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
          GPT is like an intern with superpowers, evolving from 117 million parameters in 2018 to 1.5 billion in GPT-2, and now to a staggering 175 billion in GPT-3, making it ten times more powerful than comparable programs.
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
        <div className="flex items-start mt-8 md:mt-0">
          <img src={people} alt="people" className="w-24 h-5" />
          <p className="text-gray-600 text-sm ml-2">
            1,600 people requested access a visit in last 24 hours
          </p>
        </div>
      </div>
      <div className="flex-shrink-0 w-full md:w-1/2 rounded-xl">
        <img src={ai} alt="AI" className="w-full h-full object-cover rounded-xl" />
      </div>
    </header>
  );
};

export default Header;