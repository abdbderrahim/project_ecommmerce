const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const UpdateProductController = require('../controllers/UpdateProductController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/slide');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

router.post('/UpdateProduct', upload.single('img_product'), UpdateProductController.UpdateProduct);

module.exports = router;
