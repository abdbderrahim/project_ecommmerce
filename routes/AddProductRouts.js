const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const AddProductController = require('../controllers/AddProductController');

// إعداد التخزين
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/slide'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// ✔️ ضيف middleware هنا
router.post('/AddProduct', upload.single('img_product'), AddProductController.AddProductController);

module.exports = router;
