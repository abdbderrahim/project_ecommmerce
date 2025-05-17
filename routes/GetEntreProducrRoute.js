const GetEntreProductById = require('../controllers/GetEntreProductByIdController');

const express = require('express');
const router = express.Router();



router.get('/GetEntreProduct/:id', GetEntreProductById.GetEntreProductById);

module.exports = router;
