const express = require('express');
const router = express.Router();
const SearchProduct = require('../controllers/SearchProducts');

// الراوت الخاص بالبحث
router.get('/search', SearchProduct.SearchProduct);

module.exports = router;
