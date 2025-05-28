const express = require('express');
const router = express.Router();
const orderController = require('../controllers/DeleteOrderController');

router.delete('/DeleteOrder/:id', orderController.DeleteOrder);

module.exports = router;
