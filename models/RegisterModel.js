const bcrypt = require('bcryptjs');
const connection = require('../config/DB');

exports.registerUser = (username, email, phone, password, role, callback) => {
    const hashedPassword = bcrypt.hashSync(password, 10);

    const query = `CALL AddUser(?, ?, ?, ?, ?, @p_success, @p_message);`;

    connection.query(query, [username, email, phone, hashedPassword, role], (err) => {
        if (err) {
            return callback(err);
        }

       
        connection.query('SELECT @p_success AS success, @p_message AS message;', (err, result) => {
            if (err) {
                return callback(err);
            }

            console.log("Stored Procedure Result:", result);

            if (result && result.length > 0 && result[0].success !== undefined) {
                const success = result[0].success;
                const message = result[0].message;

                callback(null, success, message);
            } else {
                callback(new Error('Stored procedure did not return expected values'), null, null);
            }
        });
    });
};
