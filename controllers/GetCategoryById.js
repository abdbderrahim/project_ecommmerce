const connection = require('../config/DB');

exports.GetCategoryById = (req, res) => {
    const { id } = req.params;

    const sql = 'SELECT * FROM categories WHERE id_categorie = ?';
    connection.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({
                message: 'Error fetching category',
                error: err.message
            });
        }

        if (result.length === 0) {
            return res.status(404).json({
                message: 'Category not found'
            });
        }

        return res.status(200).json({
            success: true,
            data: result[0]
        });
    });
};
