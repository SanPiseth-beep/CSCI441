const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const keycloak = require('../config/keycloak');

// router.get('/', homeController.index);
router.get('/',keycloak.protect());


module.exports = router;
