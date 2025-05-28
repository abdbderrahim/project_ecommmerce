const deleteCartItem = require('../controllers/DeleteCartItem');
const express = require('express');
const router = express.Router();

router.delete('/DeleteCartItem',deleteCartItem.delleteCartItem);

module.exports = router;