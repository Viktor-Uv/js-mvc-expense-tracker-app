const express = require('express');
require('dotenv').config();
const expenseRoutes = require('./routes/expense');
const cors = require('cors');
const logger = require('morgan');

// Running express server
const app = express();
const port = process.env.API_PORT || 8000;

// Add middleware to handle CORS, logging, JSON and URL-encoded data
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// route middlewares
app.use('/api', expenseRoutes);

app.listen(port);
