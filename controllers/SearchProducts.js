const connection = require('../config/DB');

exports.SearchProduct = (req, res) => {
    const name = req.query.name;

    const sql = `SELECT * FROM products WHERE name LIKE ?`;
    const searchValue = `%${name}%`;

    connection.query(sql, [searchValue], (err, result) => {
        if (err) {
            console.error('error to search product', err);
            return res.status(500).json({ error: 'error to search product' });
        }

        res.status(200).json(result);
    });
};
