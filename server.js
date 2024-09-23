const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// View engine setup (optional, e.g., using EJS)
app.set('view engine', 'ejs');

// Routes
const routes = require('./routes');
app.use('/', routes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// Sync database and start server
sequelize.sync().then(() => {
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
      console.log('Database synced');
    });
  }).catch(err => {
    console.error('Unable to sync the database:', err);
  });