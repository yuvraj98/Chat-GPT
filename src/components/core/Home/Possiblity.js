import React from 'react';
import possibilityImage from '../../../assets/possibility.jpg';
import HighlightedText from '../../common/HighlightedText';
import { useNavigate } from 'react-router-dom';

const Possibility = () => {
  const navigate = useNavigate();
  const handlerClick = () => {
    navigate('/login')
  }
  return (
    <div className='bg-richblack-800 h-[700px] flex items-center'>
      <div className="w-10/12 mx-auto flex gap-12 justify-between items-center bg-gradient-to-r from-purple-600 to-yellow-400
        shadow-md rounded-lg p-8 font-sans min-h-[400px]"> {/* Adjust min-h-[400px] as needed */}
        <div className="flex-1">
          <img src={possibilityImage} alt="possibility" className="w-full h-auto" />
        </div>
        <div className="flex-1">
          <HighlightedText text={"Request Early Access to Get Started"}></HighlightedText>
          <h1 className="font-bold text-lg md:text-xl lg:text-2xl text-richblack-50 mt-6">Importance of Reading Blogs</h1>
          <p className="text-richblack-50 font-normal text-base mt-6">Explore the value of reading blogs as a gateway to diverse knowledge and perspectives. Blogs offer unique insights and keep you informed about current trends, enhancing your understanding and fostering intellectual growth.</p>
          <button onClick = {handlerClick}className="font-sans text-black bg-yellow-50 border-0 outline-none font-inter font-bold text-md md:text-xl lg:text-2xl rounded-md py-4 px-8 mt-11">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Possibility;
