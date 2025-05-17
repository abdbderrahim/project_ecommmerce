const UpdateDelivery = require('../controllers/UpdateDeliveryController');

const express = require('express');
const router = express.Router();


router.put('/UpdateDelivery/:id',UpdateDelivery.UpdateDelivery);

module.exports = router;


