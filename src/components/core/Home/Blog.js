import React from 'react'
import Article from '../../common/Article'
import { blog01, blog02, blog03, blog04, blog05 } from '../../data/blogdata'
import HighlightedText from '../../common/HighlightedText'
import { Typewriter } from 'react-simple-typewriter'

const Blog = () => {
  return (
    <div className="bg-gray-100 pb-16"> {/* Tailwind classes */}
      <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-12"> {/* Tailwind classes */}
        <HighlightedText text={<Typewriter words={['A lot is happening, We are blogging about it']} loop={true} />} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-7"> {/* Tailwind classes */}
          <Article 
            imgUrl={blog01} 
            date="Jul 05,2022" 
            title="GPT-3 and Open AI is the future. Let us explore how it is?" 
            className="hover:shadow-lg transition-transform transform hover:scale-105" 
          />
          <Article 
            imgUrl={blog02} 
            date="Jul 05,2022" 
            title="GPT-3 and Open AI is the future. Let us explore how it is?" 
            className="hover:shadow-lg transition-transform transform hover:scale-105" 
          />
          <Article 
            imgUrl={blog03} 
            date="Jul 05,2022" 
            title="GPT-3 and Open AI is the future. Let us explore how it is?" 
            className="hover:shadow-lg transition-transform transform hover:scale-105" 
          />
          <Article 
            imgUrl={blog04} 
            date="Jul 05,2022" 
            title="GPT-3 and Open AI is the future. Let us explore how it is?" 
            className="hover:shadow-lg transition-transform transform hover:scale-105" 
          />
          <Article 
            imgUrl={blog05} 
            date="Jul 05,2022" 
            title="GPT-3 and Open AI is the future. Let us explore how it is?" 
            className="hover:shadow-lg transition-transform transform hover:scale-105" 
          />
          <Article 
            imgUrl={blog05} 
            date="Jul 05,2022" 
            title="GPT-3 and Open AI is the future. Let us explore how it is?" 
            className="hover:shadow-lg transition-transform transform hover:scale-105" 
          />
        </div>
      </div>
    </div>
  )
}

export default Blog
