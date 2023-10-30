const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
const routes = require('./api/routes');
app.use('/', routes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
