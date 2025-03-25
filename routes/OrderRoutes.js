const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderControoler');

router.post('/CreateOrder',OrderController.AddOrder);

module.exports = router;