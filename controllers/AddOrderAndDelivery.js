const session = require('express-session');
const connect = require('../config/DB');

exports.AddOrderAndDelivery = (req, res) => {
    const {
        total_price,
        payment_method,
        total_amount,
        delivery_address,
        customer_first_name,
        customer_last_name,
        customer_phone,
        card_number,
        card_expiry,
        card_cvv,
        zipcode,
        country
    } = req.body;
    console.log('body:',req.body);

    const id_user = req.session.user.id_user;

    if (!id_user) {
        return res.status(401).json({ message: "please signup first" });
    }

   
    const sqlOrder = "CALL AddOrder(?, ?, ?, ?,@p_id_order, @success, @message)";
    connect.query(sqlOrder, [total_price, payment_method ,total_amount, id_user], (err) => {
        if (err) {
            return res.status(500).json({ message: "errr to added order", error: err });
        }

        const getOrderOutput = "SELECT @p_id_order AS id_order, @success AS success, @message AS message";
        connect.query(getOrderOutput, (err, result) => {
            if (err) {
                return res.status(500).json({ message: "error to fetched results", error: err });
            }

            const { id_order, success, message } = result[0];
            console.log('order id:', id_order);

            if (!success) {
                return res.status(400).json({ success: false, message });
            }

            
            const sqlDelivery = "CALL AddDelivery(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, @p_success, @p_message)";
            connect.query(sqlDelivery, [
                delivery_address,
                id_order,
                customer_first_name,
                customer_last_name,
                customer_phone,
                card_number,
                card_expiry,
                card_cvv,
                zipcode,
                country
            ], (err) => {
                if (err) {
                    return res.status(500).json({ message: "error to added delivery", error: err });
                }

                const getDeliveryOutput = "SELECT @p_success AS success, @p_message AS message";
                connect.query(getDeliveryOutput, (err, result) => {
                    if (err) {
                        return res.status(500).json({ message: "error to fetch reult delivery", error: err });
                    }

                    const { success, message } = result[0];
                    if (success) {
                        return res.status(200).json({ success: true, message: "order and delivery added successfully", id_order });
                    } else {
                        return res.status(400).json({ success: false, message });
                    }
                });
            });
        });
    });
};
