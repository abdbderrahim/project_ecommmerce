const OrderModel = require('../models/UpdateOrderStatusModel');

exports.UpdateOrderStatus = (req, res) => {
    const { id, status } = req.body;

    if (!id || !status) {
        return res.status(400).json({ success: false, message: 'data required' });
    }

    OrderModel.UpdateOrderStatus(id, status, (err, result) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'error database' });
        }
        res.status(200).json(result);
    });
};
