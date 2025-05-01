const GetCategoryById = require('../controllers/GetCategoryById');

const express = require('express');
const route = express.Router();

route.get('/GetCategoryById/:id',GetCategoryById.GetCategoryById);

module.exports = route;