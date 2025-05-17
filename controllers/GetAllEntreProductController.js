const connection = require('../config/DB');

exports.GetAllEntreProduct = (req, res) => {
  const query = 'SELECT * FROM entre_products'; // غيّر اسم الجدول حسب الحاجة

  connection.query(query, (err, result) => {
    if (err) {
      console.error('error to get data', err);
      return res.status(500).json({ success: 0, message: 'error to get data' });
    }

    res.status(200).json({ success: 1, data: result });
  });
};
