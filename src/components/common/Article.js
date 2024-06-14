import React from 'react';
import { useNavigate } from 'react-router-dom';

const Article = ({ imgUrl, date, title }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/blogs')
  }
  return (
    <div className="rounded-lg overflow-hidden bg-gray-800 shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
      <img src={imgUrl} alt="blog" className="w-full h-48 object-cover" />
      <div className="p-4 text-white">
        <p className="text-sm font-medium mb-2">{date}</p>
        <h3 className="text-xl font-bold leading-tight mb-2 hover:text-gray-600">{title}</h3>
        <p onClick = {handleClick}className="hover:underline">Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
