const GetAllOrders = require('../controllers/GetAllOrdersController');


const express = require('express');
const router = express.Router();


router.get('/GetAllOrders',GetAllOrders.GetAllOrders);

module.exports = router;