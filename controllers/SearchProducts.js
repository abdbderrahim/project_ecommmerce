const connection = require('../config/DB');

exports.SearchProduct = (req, res) => {
    const name = req.query.name;

    const sql = `SELECT * FROM products WHERE name LIKE ?`;
    const searchValue = `%${name}%`;

    connection.query(sql, [searchValue], (err, result) => {
        if (err) {
            console.error('خطأ في البحث عن المنتجات:', err);
            return res.status(500).json({ error: 'حدث خطأ في السيرفر' });
        }

        res.status(200).json(result); // إرجاع النتائج على شكل JSON
    });
};
