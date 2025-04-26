const GetAllProductsController = require('../controllers/GetAllProductsContrroller');

const express = require('express');
const router = express.Router();

router.get('/GetAllProducts',GetAllProductsController.GetAllProducts);

module.exports = router;