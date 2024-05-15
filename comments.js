// Create web server with express
// Create API Endpoint
// Create a function to handle the request
// Get the data from the request
// Get the data from the request body
// Get the data from the request params
// Get the data from the request query
// Create a response
// Return the response
// Start the server
// Listen to the port

// Import express module
const express = require('express');

// Create a web server
const app = express();

// Create API Endpoint
app.get('/api/comments', (req, res) => {
    // Create a response
    const response = {
        message: 'Get all comments',
        data: []
    };

    // Return the response
    res.json(response);
});

// Create API Endpoint
app.post('/api/comments', (req, res) => {
    // Get the data from the request body
    const body = req.body;

    // Create a response
    const response = {
        message: 'Create a comment',
        data: body
    };

    // Return the response
    res.json(response);
});

// Create API Endpoint
app.get('/api/comments/:id', (req, res) => {
    // Get the data from the request params
    const params = req.params;

    // Create a response
    const response = {
        message: 'Get a comment',
        data: params
    };

    // Return the response
    res.json(response);
});

// Create API Endpoint
app.put('/api/comments/:id', (req, res) => {
    // Get the data from the request params
    const params = req.params;

    // Get the data from the request body
    const body = req.body;

    // Create a response
    const response = {
        message: 'Update a comment',
        data: {
            ...params,
            ...body
        }
    };

    // Return the response
    res.json(response);
});

// Create API Endpoint
app.delete('/api/comments/:id', (req, res) => {
    // Get the data from the request params
    const params = req.params;

    // Create a response
    const response = {
        message: 'Delete a comment',
        data: params
    };

    // Return the response
    res.json(response);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running at http://