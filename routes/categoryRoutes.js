const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoriesController');



router.get('/getAllCategories',categoryController.getAllCategories);


module.exports = router;