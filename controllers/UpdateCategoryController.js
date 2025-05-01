const CategoryModel = require('../models/UpdateCategory');

exports.UpdateCategory = (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;

    if (!name || !description) {
        return res.status(400).json({
            success: false,
            message: 'Name and description are required'
        });
    }

    CategoryModel.UpdateCategory(id, name, description, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: 'Database error',
                error: err.message
            });
        }

        return res.status(200).json(result);
    });
};
