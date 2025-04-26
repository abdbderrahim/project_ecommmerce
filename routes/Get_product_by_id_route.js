const GetProductByIdController = require('../controllers/GetProductByIdController');

const express = require('express');
const router = express.Router();

router.get('/GetProductById/:id', GetProductByIdController.GetProductById);


module.exports = router;