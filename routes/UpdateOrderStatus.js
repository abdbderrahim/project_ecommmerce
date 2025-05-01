const express = require('express');
const router = express.Router();
const UpdateOrderStatus = require('../controllers/UpdateOrderStatusController');

router.put('/UpdateOrderStatus',UpdateOrderStatus.UpdateOrderStatus);

module.exports = router;
