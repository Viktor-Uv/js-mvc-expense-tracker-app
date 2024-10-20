const express = require('express');
require('dotenv').config();
const expenseRoutes = require('./routes/expense');
const cors = require('cors');

// Running express server
const app = express();
const port = process.env.API_PORT || 8000;

// route middlewares
app.use(cors());
app.use('/api', expenseRoutes);
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening at http://localhost:${port}`);
});
