const express = require('express');
const router = express.Router();
const blogController = require('../controller/blogController');
const auth = require('../middleware/auth');

// POST /api/v1/blogs
router.post('/', blogController.createBlog);

// GET /api/v1/blogs
router.get('/', blogController.getBlogs);

// GET /api/v1/blogs/:id
router.get('/:id', blogController.getBlogById);

// PUT /api/v1/blogs/:id
router.put('/:id', auth, blogController.updateBlog);

// DELETE /api/v1/blogs/:id
router.delete('/:id', auth, blogController.deleteBlog);

module.exports = router;
