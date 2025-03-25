let connect = require('../config/DB');



exports.AddOrder = (req, res) => {
    console.log("Session Data:", req.session);
    console.log("User Data:", req.session.user);
    console.log("Request Body:", req.body);

    if (!req.session || !req.session.user || !req.session.user.id_user) {
        return res.status(401).json({ message: "user not logged in" });
    }

    const userId = req.session.user.id_user;
    const { Total_price } = req.body;

    // التحقق من أن Total_price رقم صالح
    if (!Total_price || isNaN(Total_price) || Total_price <= 0) {
        console.log("Invalid total price received:", Total_price);
        return res.status(400).json({ message: "invalid total price" });
    }

    console.log("Creating order for user:", userId, "with total price:", Total_price);

    const sql = 'CALL create_order(?, ?)';
    connect.query(sql, [userId, Total_price], (err, result) => {
        if (err) {
            console.error("Database Error:", err);
            return res.status(500).json({ message: "Error to add order", error: err });
        }

        console.log("Stored Procedure Result:", result);

        if (result && result[0] && result[0][0] && result[0][0].id_order) {
            const orderId = result[0][0].id_order;
            return res.status(200).json({ id_order: orderId });
        } else {
            return res.status(400).json({ message: "Error to add order, no order ID returned" });
        }
    });
};
