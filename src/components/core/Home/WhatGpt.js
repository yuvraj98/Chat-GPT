import React from 'react'
// import { Feature } from '../components';
import HighlightedText from '../../common/HighlightedText';
import CourseCard from '../../common/CourseCard';
const WhatGPT3 = () => {
    return (
      <section className="bg-gradient-to-r from-indigo-500 to-blue-700 py-16 px-8 md:px-24 lg:px-48 shadow-md rounded-lg">
        <div className="container mx-auto flex flex-col items-center space-y-8">
          <HighlightedText text ={"The potential is greater than you can possibly envision"}></HighlightedText>
          <p className="text-gray-300 text-center max-w-3xl text-richblue-5">
            Explore the Library
          </p>
          <CourseCard></CourseCard>
        </div>
      </section>
    );
  };
  
  export default WhatGPT3;
