const UpdateEntreProduct = require('../controllers/UpdateEntreProductController');

const express = require('express');
const router = express.Router();


router.post('/UpdateEntreProduct',UpdateEntreProduct.UpdateEntreProductController);

module.exports = router;
