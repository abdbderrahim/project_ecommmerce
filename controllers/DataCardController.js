const connection = require('../config/DB');

exports.AddDelivery = (req, res) => {
    const {
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
    } = req.body;

    const sql = `CALL AddDelivery(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, @p_success, @p_message); SELECT @p_success AS success, @p_message AS message;`;

    connection.query(
        sql,
        [
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
        ],
        (error, results) => {
            if (error) {
                console.error('Error executing AddDelivery:', error);
                return res.status(500).json({ success: false, message: 'Database error occurred' });
            }

            // Retrieve success and message from the second result set
            const output = results[1][0];
            res.json({ success: output.success, message: output.message });
        }
    );
};
