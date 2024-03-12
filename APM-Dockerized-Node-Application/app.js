const express = require('express');
const app = express();
const port = 3000;

// New Relic initialization
require('newrelic');

// Define routes or middleware as needed
// Example:
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

