import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {
  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog._id} className="border-b-2 py-4">
          <h2 className="text-richblack-5 text-2xl font-bold mb-2">
            <Link to={`/blogs/${blog._id}`} className="hover:underline">
              {blog.title}
            </Link>
          </h2>
          <p className="text-richblack-5 mb-2">{blog.summary}</p>
          <p className="text-richblack-5 text-sm">By {blog.author} on {new Date(blog.createdAt).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
