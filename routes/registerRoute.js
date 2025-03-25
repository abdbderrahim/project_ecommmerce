const registerController = require('../controllers/registerController');
const express = require('express');
const router = express.Router();

router.post('/registerUser',registerController.registerUser);

module.exports = router;

