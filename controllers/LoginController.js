const connect = require('../config/DB');
const bcrypt = require('bcryptjs');

exports.login = (req, res) => {
    const { email, password } = req.body;

    const sql = 'CALL LoginUser(?, ?, @p_success, @p_message, @p_id_user)';
    connect.query(sql, [email, password], (err, result) => {
        if (err) {
            console.log("Error during query:", err); 
            return res.status(500).json({ message: 'Error during login' });
        }

       
        connect.query('SELECT @p_success AS success, @p_message AS message, @p_id_user AS id_user', (err, result) => {
            if (err) {
                console.log("Error fetching result:", err);
                return res.status(500).json({ message: 'Error fetching results' });
            }

            console.log("Result from DB:", result); 

            if (result && result.length > 0 && result[0].success !== undefined) {
                const success = result[0].success;
                const hashedPassword = result[0].message;
                const UserId = result[0].id_user;

                if (success) {
                   
                    bcrypt.compare(password, hashedPassword, (err, isMatch) => {
                        if (err) {
                            console.log("Error comparing passwords:", err);
                            return res.status(500).json({ message: 'Error comparing password' });
                        }

                        if (isMatch) {
                            req.session.user = {
                                email: email,
                                password: password,
                                id_user: UserId
                            };
                            return res.status(200).json({ message: 'Login successful' });
                        } else {
                            return res.status(400).json({ message: 'Incorrect password' });
                        }
                    });
                } else {
                    return res.status(400).json({ message: 'Email does not exist' });
                }
            } else {
                return res.status(500).json({ message: "Unexpected error occurred" });
            }
        });
    });
};
