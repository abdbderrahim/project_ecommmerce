const connection = require('../config/DB');

exports.DeleteDelivery = (req, res) => {
    const id = req.params.id;
    const sql = 'CALL DeleteDelivery(?, @p_success, @p_message)';

    // First call the stored procedure
    connection.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Error executing stored procedure:', err);
            return res.status(500).json({ success: false, message: 'Database error' });
        }

        // Then get the OUT parameters
        connection.query('SELECT @p_success AS success, @p_message AS message', (err2, result2) => {
            if (err2) {
                console.error('Error fetching output parameters:', err2);
                return res.status(500).json({ success: false, message: 'Output fetch error' });
            }

            const { success, message } = result2[0];
            return res.json({ success: success == 1, message });
        });
    });
};
