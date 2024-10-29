const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.index);

router.get('/renting1', homeController.renting1);

module.exports = router;
