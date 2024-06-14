const Blog = require('../models/Blog');

exports.createBlog = async (req, res) => {
  try {
    const blog = new Blog({
      title: req.body.title,
      content: req.body.content,
      topic: req.body.topic,
      author: req.body.author
    });
    await blog.save();
    res.status(201).send(blog);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate('');
    res.status(200).send(blogs);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getBlogById = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findById(id).populate('');
    if (!blog) {
      return res.status(404).send({ error: 'Blog not found' });
    }
    res.status(200).send(blog);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedBlog) {
      return res.status(404).send({ error: 'Blog not found' });
    }
    res.status(200).send(updatedBlog);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);
    if (!deletedBlog) {
      return res.status(404).send({ error: 'Blog not found' });
    }
    res.status(200).send({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(400).send(error);
  }
};
