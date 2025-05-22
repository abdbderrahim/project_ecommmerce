// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/checkAuth', authController.checkAuth);

module.exports = router;
