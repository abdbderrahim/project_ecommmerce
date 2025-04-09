const ClearCartContrroller = require('../controllers/ClearCartController');
const express = require('express');
const router = express.Router();

router.delete('/ClearCart',ClearCartContrroller.ClearCart);

module.exports = router;