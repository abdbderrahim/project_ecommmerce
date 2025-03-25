const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');


router.get('/GetAllProducts',productController.GetAllProducts);

module.exports = router;