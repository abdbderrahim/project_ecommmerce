const express = require('express');
const router  = express.Router();
const GetProductsByCategory = require('../controllers/GetPeoductsByCategory');


router.get('/GetProductsByCategory/:id',GetProductsByCategory.GetProductsByCategory);

module.exports = router;