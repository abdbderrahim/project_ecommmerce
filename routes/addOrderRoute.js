const AddOrderController = require('../controllers/orderController');
const express = require('express');
const router = express.Router();


router.post('/AddOrder',AddOrderController.AddOrder);

module.exports = router;