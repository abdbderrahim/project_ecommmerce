const EntreProduct = require('../controllers/EntreProductController');





const express = require('express');
const route = express.Router();


route.post('/AddEntreProduct',EntreProduct.EntreProductModel);

module.exports = route;