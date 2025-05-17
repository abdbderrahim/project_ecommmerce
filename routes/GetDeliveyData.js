const GetDeliveryData = require('../controllers/GetDeliveryData');

const express = require('express');
const router = express.Router();



router.get('/GetDeliveryData', GetDeliveryData.GetDeliveryData);

module.exports = router;
