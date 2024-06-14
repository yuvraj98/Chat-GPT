// BlogDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBlogById } from '../../../services/operations/blogs';
import Sidebar from './Sidebar';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const fetchedBlog = await getBlogById(id);
        setBlog(fetchedBlog);
      } catch (error) {
        setError('Blog not found');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-4 text-richblack-5">{blog.title}</h1>
        <p className="text-richblack-5 mb-2">Topic: {blog.topic}</p>
        <p className="text-richblack-5 mb-4">Created by {blog.author} on {new Date(blog.createdAt).toLocaleDateString()}</p>
        <div className="prose text-richblack-5">
          {blog.content.split('\n').map((paragraph, index) => (
            <p className="text-richblack-5 mb-4" key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
