const DeleteUser = require('../controllers/DeleteUserController');
const express = require('express');
const router = express.Router();


router.delete('/DeleteUser',DeleteUser.DeleteUser);

module.exports = router;