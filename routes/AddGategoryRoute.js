const addCategory = require('../controllers/AddCategoryController');

const express = require('express');
const route = express.Router();


route.post('/AddCategory',addCategory.addCategory);

module.exports = route;