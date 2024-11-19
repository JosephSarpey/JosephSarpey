// Importing necessary modules
const express = require('express');
const path = require('path');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));  // Folder where EJS files will be stored

// Serve static files (like CSS and images)
app.use(express.static(path.join(__dirname, 'public')));

// Routes for different pages
app.get('/', (req, res) => {
  res.render('home');  // Render home.ejs
});

app.get('/products', (req, res) => {
  res.render('products');  // Render products.ejs
});

app.get('/about', (req, res) => {
  res.render('about');  // Render about.ejs
});

app.get('/contact', (req, res) => {
  res.render('contact');  // Render contact.ejs
});

// Product-specific routes (for example)
app.get('/products/smartphone', (req, res) => {
  res.send('Smartphone product page');  // Just a simple text for now
});

app.get('/products/laptop', (req, res) => {
  res.send('Laptop product page');
});

app.get('/products/headphones', (req, res) => {
  res.send('Headphones product page');
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
