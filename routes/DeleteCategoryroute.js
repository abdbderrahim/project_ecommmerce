const DeleteCategory = require('../controllers/DeleteCategoryController');

const express = require('express');
const router = express.Router();


router.delete('/DeleteCategory',DeleteCategory.DeleteCategory);

module.exports = router;