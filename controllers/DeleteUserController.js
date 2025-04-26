const DeleteUser = require('../models/DeleteUserModel');

exports.DeleteUser = (req, res) => {
    const { id } = req.body;

    DeleteUser.DeleteUser(id, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: 'Failed to delete user',
            });
        }

        if (result.success == 1) {
            return res.status(200).json({
                success: true,
                message: result.message
            });
        } else {
            return res.status(400).json({
                success: false,
                message: result.message
            });
        }
    });
};
