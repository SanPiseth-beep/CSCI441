// written by: Piseth,
// edited by: Nilin Lay, Nilin Lay, Ndeye Anta Mbaye


// server.js
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// View engine setup
app.set('view engine', 'ejs');

// Routes
const routes = require('./routes');
app.use('/', routes);

app.use(express.static(__dirname + '/public'));

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');
    await sequelize.sync(); // Synchronize the models with the database
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  console.log(`Server running on http://localhost:${port}`);
});

module.exports = app; // Export the app object