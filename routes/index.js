const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const keycloak = require('../config/keycloak');

router.get('/', homeController.index);

router.get('/login', (req, res) => {
    res.redirect(keycloak.loginUrl({action: 'login'}, "http://localhost:3000/login"));
});

router.get('/register', (req, res) => {
    res.redirect(keycloak.loginUrl({ action: 'register' }, "http://localhost:3000/login"));
});

router.get('/homepage', homeController.index);

router.get('/homepage1', homeController.homepage1);

module.exports = router;
