import React from 'react'

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className="shadow-md rounded-lg overflow-hidden bg-gray-800"> {/* Tailwind classes */}
      <img src={imgUrl} alt="blog" className="w-full h-48 object-cover" /> {/* Tailwind classes */}
      <div className="p-4 text-white"> {/* Tailwind classes for white text */}
        <p className="text-sm font-medium mb-2">{date}</p> {/* Tailwind classes */}
        <h3 className="text-xl font-bold leading-tight mb-2">{title}</h3> {/* Tailwind classes */}
        <p className="hover:underline">Read Full Article</p> {/* Tailwind classes */}
      </div>
    </div>
  )
}

export default Article
