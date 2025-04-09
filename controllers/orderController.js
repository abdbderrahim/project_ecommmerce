const session = require('express-session');
const connect  = require('../config/DB');

exports.AddOrder = (req, res) => {
    const { total_price, payment_methode, total_amount } = req.body;
    const id_user = req.session.user.id_user;
    console.log('payment', payment_methode);

    
    if (!id_user) {
        console.log("loggin in");
    }

    console.log('User ID in session:', id_user);
    const sql = "CALL AddOrder(?, ?, ?,?, @success, @message)";
    connect.query(sql, [total_price, payment_methode, total_amount, id_user], (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Error to add order", error: err });
        }

        connect.query("SELECT @success AS success, @message AS message", (err, result) => {
            if (err) {
                return res.status(500).json({ message: "Error fetching result", error: err });
            }

            const success = result[0].success;
            const message = result[0].message;

            if (success !== 0) {
                return res.status(200).json({ success: success, message: message });
            } else {
                return res.status(200).json({ success: success, message: message });
            }
        });
    });
};
