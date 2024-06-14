import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import BlogList from './BlogList';
import { getAllBlogs } from '../../../services/operations/blogs';

const Sidebar = () => {
  const [topics, setTopics] = useState([]);
  const [blogs, setBlogs] = useState([]);
  
  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const blogs = await getAllBlogs(); // Fetch all blogs
        setBlogs(blogs);
        const uniqueTopics = [...new Set(blogs.map(blog => blog.topic))]; // Extract unique topics
        setTopics(uniqueTopics);
      } catch (error) {
        console.error('Error fetching topics:', error);
      }
    };

    fetchTopics();
  }, []);

  return (
    <div className="w-1/5 h-[2000px] bg-yellow-400 text-white p-4">
      <Routes>
        <Route path="/" element={<BlogList blogs={blogs} />} />
      </Routes>
    </div>
  );
};

export default Sidebar;
