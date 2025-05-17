const connection = require('../config/DB');

exports.DeleteEntreProduct = (req, res) => {
  const { id } = req.params;

  connection.query('CALL DeleteEntreProduct(?)', [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ success: 0, message: 'Server error occurred' });
    }

    const response = result[0][0]; 
    res.json({
      success: response.success,
      message: response.message
    });
  });
};
