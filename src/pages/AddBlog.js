import React, { useState } from 'react';
import { createBlog } from '../services/operations/blogs'; // Adjust the import path as needed
import Footer from '../components/core/Home/Footer';

const AddBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [topic, setTopic] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    try {
      const blogData = { title, content, topic, author };
      await createBlog(blogData);
      setSuccess(true);
      // Clear the form fields
      setTitle('');
      setContent('');
      setTopic('');
      setAuthor('');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
   <>
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8 mx-4 my-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Add Your Blog</h1>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        {success && <p className="text-green-500 mb-4 text-center">Blog added successfully!</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-semibold mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-semibold mb-2">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="10"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-semibold mb-2">Topic</label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-semibold mb-2">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>

     
    </div>
    <Footer></Footer>
   </>
  );
};

export default AddBlog;
