import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../components/core/Blog/Sidebar';
import BlogList from '../components/core/Blog/BlogList';
import BlogDetail from '../components/core/Blog/BlogDetails'; // Ensure the import matches the file name
import BlogContent from '../components/core/Blog/BlogContent';
import { getAllBlogs } from '../services/operations/blogs';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getAllBlogs(); // No need for `response.data` as the function already returns the data
        setBlogs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-4">
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        
        <Routes>
          
          <Route path="/" element={<BlogContent />} />
          
        </Routes>
      </div>
    </div>
  );
};

export default BlogPage;
