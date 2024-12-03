// routes/index.js
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const rentController = require('../controllers/rentController');
const keycloak = require('../config/keycloak');

router.get('/', homeController.index);

router.get('/login', (req, res) => {
    res.redirect(keycloak.loginUrl({ action: 'login' }, "http://localhost:3000/login"));
});

router.get('/register', (req, res) => {
    res.redirect(keycloak.loginUrl({ action: 'register' }, "http://localhost:3000/login"));
});

router.get('/homepage', homeController.index);
router.get('/renting1', homeController.renting1);

router.get('/homepage1', homeController.homepage1);

// Add the route to render the testing.ejs template
router.get('/testing', (req, res) => {
    res.render('testing');
});

router.get('/api/stations-and-bikes', rentController.getAvailableStationsAndBikes);
router.post('/api/rent-bike', rentController.rentBike); // Ensure this line is correct

module.exports = router;