// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const keycloak = require('./config/keycloak');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(keycloak.middleware());

// View engine setup
app.set('view engine', 'ejs');

// Routes
const routes = require('./routes');
app.use('/', routes);

app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});