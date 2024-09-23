const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.index);

// User routes
router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);

module.exports = router;
