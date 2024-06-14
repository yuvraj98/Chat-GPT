import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="bg-richblack-600 rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-richblack-500">
      <h2 className="text-2xl font-semibold mb-4">
        <span className="bg-gradient-to-r from-richblack-5 via-richblack-5 to-richblack-50 text-transparent bg-clip-text hover:text-gray-600">{title}</span>
      </h2>
      <p className="text-richblack-900">{description}</p>
    </div>
  );
};

export default Card;
