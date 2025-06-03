const session = require('express-session');
const connect  = require('../config/DB');

exports.AddOrder = (req, res) => {
    const { total_price, total_amount } = req.body;
    const id_user = req.session.user.id_user;
  

    
    if (!id_user) {
        console.log("loggin in");
    }

    console.log('User ID in session:', id_user);
    const sql = "CALL AddOrder(?, ?,?, @p_id_order, @success, @message)";
    connect.query(sql, [total_price, total_amount, id_user], (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Error to add order", error: err });
        }

        connect.query("SELECT @success AS success, @message AS message", (err, result) => {
            if (err) {
                return res.status(500).json({ message: "Error fetching result", error: err });
            }

            const success = result[0].success;
            const message = result[0].message;
            const id_order = result[0].id_order;

            if (success !== 0) {
                return res.status(200).json({ success: success, message: message , id_order: id_order });
            } else {
                return res.status(200).json({ success: success, message: message });
            }
        });
    });
};
