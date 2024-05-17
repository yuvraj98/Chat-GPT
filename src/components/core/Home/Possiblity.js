import React from 'react';
import possibilityImage from '../../../assets/possibility.png';
import HighlightedText from '../../common/HighlightedText';

const Possibility = () => {
  return (
   <div className='bg-richblack-800'>
      <div className="w-10/12 mx-auto flex  gap-8 justify-between items-center bg-gradient-to-r from-purple-600 to-yellow-400
    shadow-md rounded-lg p-8 font-sans">
        <div className="flex-1">
          <img src={possibilityImage} alt="possibility" className="w-full h-auto" />
        </div>
        <div className="flex-1">
          <HighlightedText text={"Request Early Access to Get Started"}></HighlightedText>
          <h1 className="font-bold text-lg md:text-xl lg:text-2xl text-richblack-50 mt-6">Register today & start exploring the endless possibilities.</h1>
          <p className="text-richblack-200 font-normal text-base mt-6">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          <button className="font-sans text-black bg-yellow-50 border-0 outline-none font-inter font-bold text-md  md:text-xl lg:text-2xl rounded-md py-4 px-8 mt-11">Get Started</button>
        </div>
        
      </div>
   </div>
  );
};

export default Possibility;
