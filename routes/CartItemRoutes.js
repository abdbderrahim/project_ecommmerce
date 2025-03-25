const CartItemController = require('../controllers/CartITemController');
const express = require('express');
const router = express.Router();

router.post('/AddCartItem',CartItemController.AddCartItem);

module.exports = router;