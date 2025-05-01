const connection = require('../config/DB');

exports.UpdateOrderStatus = (id, status, callback) => {
    const sql = 'CALL UpdateOrderStatus(?, ?, @p_success, @p_message)';
    connection.query(sql, [id, status], (err) => {
        if (err) return callback(err, null);

        connection.query('SELECT @p_success AS success, @p_message AS message', (err2, result) => {
            if (err2) return callback(err2, null);
            callback(null, result[0]);
        });
    });
};
