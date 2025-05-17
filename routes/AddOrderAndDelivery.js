const express = require('express');
const router = express.Router();
const AddOrderAndDelivery = require('../controllers/AddOrderAndDelivery');


router.post("/AddOrderAndDelivery",AddOrderAndDelivery.AddOrderAndDelivery);

module.exports = router;