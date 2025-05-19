const DeleteDelivery = require('../controllers/DeleteDeliveryController');
const express = require('express');
const router = express.Router();


router.delete('/DeleteDelivery/:id', DeleteDelivery.DeleteDelivery );
module.exports = router;