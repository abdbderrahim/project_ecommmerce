const DeleteEntreProduct = require('../controllers/DeleteEntreProductController');
const express = require('express');
const router = express.Router();


router.delete('/DeleteEntreProduct/:id', DeleteEntreProduct.DeleteEntreProduct);
module.exports = router;