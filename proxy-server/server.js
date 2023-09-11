// server.js
const express = require('express');
const app = express();
const fetch = require('node-fetch'); // For making HTTP requests

const PORT = process.env.PORT || 3001;

// Middleware to enable CORS (Cross-Origin Resource Sharing)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Proxy route
app.get('/proxy', async (req, res) => {
  try {
    // Define the URL of the resource you want to access
    const resourceURL = 'https://drive.google.com/file/d/1PMLIeT_CGv6oGL7WoXa-ubgcSspRfyBL/view';

    // Fetch the resource from the external URL
    const response = await fetch(resourceURL);

    // Check if the response is successful (status code 200)
    if (response.status === 200) {
      // Send the response from the external resource to the client
      res.send(await response.text());
    } else {
      // Handle other HTTP status codes as needed
      res.status(response.status).send('Error fetching data');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal server error');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
