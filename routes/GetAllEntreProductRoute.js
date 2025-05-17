const GetAllEntreProduct = require('../controllers/GetAllEntreProductController');
const express = require('express');
const router = express.Router();


router.get('/GetAllEntreProduct',GetAllEntreProduct.GetAllEntreProduct);

module.exports = router;