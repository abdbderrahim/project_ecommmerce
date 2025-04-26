const DeleteProductController = require('../controllers/DeleteProductController');
const express = require('express');
const router = express.Router();


router.delete('/DeleteProduct',DeleteProductController.DeleteProduct);

module.exports = router;