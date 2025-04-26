const GetAllUsers = require('../controllers/GetAllUsersController');
const express = require('express');
const router = express.Router();


router.get('/GetAllUsers',GetAllUsers.GetAllUsers);

module.exports = router;