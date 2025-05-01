const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/UpdateCategoryController');

router.put('/UpdateCategory/:id', CategoryController.UpdateCategory);

module.exports = router;
