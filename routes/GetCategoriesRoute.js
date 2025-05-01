const getAllCategories = require('../controllers/GetAllCategoriesController');

const express = require('express');
const route = express.Router();


route.get('/GetAllCategories',getAllCategories.getAllCategories);

module.exports = route;