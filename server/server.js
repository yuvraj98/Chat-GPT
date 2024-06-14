const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/auth');
const contact = require('./routes/contact');
const blogRoutes = require('./routes/blogRoutes'); // Import blog routes
const database = require('./config/database');
const cors = require('cors');

const app = express();

// CORS configuration
app.use(cors({
  origin: 'http://localhost:3000', // replace with your frontend URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // if you want to allow cookies to be sent
  allowedHeaders: 'Content-Type, Authorization',
}));

// Setting up port number
const PORT = process.env.PORT || 4000;

// Connect to the database
database.connect();

// Middleware
app.use(express.json());
app.use(bodyParser.json());

// Routes
app.options('/api/v1/auth/', cors(), userRoutes);
app.use('/api/v1/auth', userRoutes);
app.use('/api/v1/', contact);
// Mount topic routes

// Mount blog routes
app.use('/api/v1/blogs', blogRoutes);

// Test route
app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running ...",
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`App is listening at ${PORT}`);
});
