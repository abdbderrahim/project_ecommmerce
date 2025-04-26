const connection = require('../config/DB');

exports.UpdateProduct = (req, res) => {
    const { id_product, name, description, price, stock, id_categorie } = req.body;
    const img_product = req.file ? 'slide/' + req.file.filename : null;
    const sql = 'CALL UpdateProduct(?,?,?,?,?,?,?,@p_success,@p_message)';
    
    connection.query(sql, [id_product, name, description, price, stock,img_product, id_categorie], (err, result) => {
      
        if (err) {
            return res.status(500).json({
                success: false,
                message: 'Error updating product'
            });
        }

        connection.query('SELECT @p_success AS success, @p_message AS message', (err2, result2) => {
            if (err2) {
                return res.status(500).json({
                    success: false,
                    message: 'Error retrieving result'
                });
            }

            const success = result2[0].success;
            const message = result2[0].message;

            res.status(200).json({
                success,
                message
            });
        });
    });
}
