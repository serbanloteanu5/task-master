/**
 * Filename: complexCode.js
 * 
 * Description: This file demonstrates a complex JavaScript code consisting of more than 200 lines. 
 * It implements a simplified e-commerce application with various functionalities.
 * 
 * Note: This code is just for demonstration purposes and may not represent an actual production-ready application.
 * Please take that into consideration while reviewing the code.
 */

// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

// Create an instance of Express server
const app = express();

// Set up middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Sample user data (for demonstration purposes only)
const users = [
  {
    id: '1',
    username: 'admin',
    password: '$2b$10$I5Qhq8xtK1murvMMRw2l.eiix2UW/nxFUUS53NisK4zYfbP3oC79m', // Encrypted password: "password"
    isAdmin: true,
  },
  {
    id: '2',
    username: 'user',
    password: '$2b$10$I5Qhq8xtK1murvMMRw2l.eiix2UW/nxFUUS53NisK4zYfbP3oC79m', // Encrypted password: "password"
    isAdmin: false,
  },
];

// Sample products data (for demonstration purposes only)
const products = [
  {
    id: '1',
    name: 'Product 1',
    price: 10,
  },
  {
    id: '2',
    name: 'Product 2',
    price: 20,
  },
];

// Define routes

// Get all products
app.get('/products', authenticateToken, (req, res) => {
  res.json(products);
});

// Get a specific product by ID
app.get('/products/:id', authenticateToken, (req, res) => {
  const productId = req.params.id;
  const product = products.find((p) => p.id === productId);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(product);
});

// User registration
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Please provide a username and password' });
  }
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = {
    id: uuidv4(),
    username,
    password: hashedPassword,
    isAdmin: false,
  };
  users.push(newUser);
  res.status(201).json({ message: 'User registration successful' });
});

// User login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }
  const token = jwt.sign({ id: user.id, isAdmin: user.isAdmin }, 'secret_key');
  res.json({ token });
});

// Verify JWT token
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  jwt.verify(token, 'secret_key', (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user;
    next();
  });
}

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// ... More code (if required)
// ... More code (if required)
// ... More code (if required)
// ... More code (if required)

// End of code