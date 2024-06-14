import React from 'react';

const CTA = () => {
  return (
    <div className="w-10/12 mx-auto flex justify-between items-center bg-gradient-to-r from-purple-600 to-yellow-400 border border-black shadow-md rounded-lg p-8 font-sans">
      <div className="flex-2.5">
        <p className="font-medium text-white cursor-pointer">Request Early Access to Get Started</p>
        <h1 className="font-bold text-lg md:text-xl lg:text-2xl text-richblack-50">Register today & start exploring the endless possibilities.</h1>
      </div>
      <button className="flex-0.5 font-sans text-white bg-black border-0 outline-none font-bold text-lg md:text-xl lg:text-2xl rounded-full py-4 px-8 mt-8 md:mt-0">Get Started</button>
    </div>
  );
};

export default CTA;
