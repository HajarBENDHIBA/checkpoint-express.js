const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Home</title>
        <link rel="stylesheet" href="/css/style.css">
      </head>
      <body>
        <div class="navbar">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact Us</a>
        </div>
        
        <div class="container">
          <div class="message-container">
            <h1>Welcome To Our Website</h1>
            <p>We are open during working hours: Monday to Friday, from 9 AM to 5 PM.</p>
          </div>
        </div>

        <footer>
          <p>&copy; 2024 Our Website</p>
        </footer>
      </body>
    </html>
  `);
});

// Our Services route
app.get('/services', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Our Services</title>
        <link rel="stylesheet" href="/css/style.css">
      </head>
      <body>
        <div class="navbar">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact Us</a>
        </div>
        
        <div class="container">
          <div class="message-container">
          <h1>Our Services</h1>
          <p>We offer a range of high-quality services to meet your needs.</p>
        </div>
          </div>

        <footer>
          <p>&copy; 2024 Our Website</p>
        </footer>
      </body>
    </html>
  `);
});

// Contact Us route
app.get('/contact', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Contact Us</title>
        <link rel="stylesheet" href="/css/style.css">
      </head>
      <body>
        <div class="navbar">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact Us</a>
        </div>
        
       <div class="container">
          <div class="message-container">
          <h1>Contact Us</h1>
          <p>Email: contact@ourwebsite.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
          </div>

        <footer>
          <p>&copy; 2024 Our Website</p>
        </footer>
      </body>
    </html>
  `);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
