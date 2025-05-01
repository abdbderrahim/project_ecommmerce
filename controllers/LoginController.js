const connect = require('../config/DB');
const bcrypt = require('bcryptjs');

exports.login = (req, res) => {
    const { email, password } = req.body;

    const sql = 'CALL LoginUser(?, ?, @p_success, @p_message, @p_id_user, @p_role)';
    connect.query(sql, [email, password], (err, result) => {
        if (err) {
            console.log("حدث خطأ أثناء الاستعلام:", err); 
            return res.status(500).json({ message: 'حدث خطأ أثناء تسجيل الدخول' });
        }

        connect.query('SELECT @p_success AS success, @p_message AS message, @p_id_user AS id_user, @p_role AS role', (err, result) => {
            if (err) {
                console.log("حدث خطأ أثناء استرجاع النتائج:", err);
                return res.status(500).json({ message: 'حدث خطأ أثناء استرجاع النتائج' });
            }

            console.log("النتيجة من قاعدة البيانات:", result);

            if (result && result.length > 0 && result[0].success !== undefined) {
                const success = result[0].success;
                const hashedPassword = result[0].message;
                const UserId = result[0].id_user;
                const userRole = result[0].role;

                if (success) {
                    bcrypt.compare(password, hashedPassword, (err, isMatch) => {
                        if (err) {
                            console.log("حدث خطأ أثناء مقارنة كلمات المرور:", err);
                            return res.status(500).json({ message: 'حدث خطأ أثناء مقارنة كلمة المرور' });
                        }

                        if (isMatch) {
                            req.session.user = {
                                email: email,
                                id_user: UserId,
                                role: userRole // تخزين الدور في الجلسة
                            };

                            // إرسال استجابة حسب الدور
                            if (userRole === 'admin') {
                                return res.status(200).json({
                                    message: 'You have successfully logged in as a admin',
                                    user: {
                                        id_user: UserId,
                                        email: email,
                                        role: userRole
                                    }
                                });
                            } else {
                                return res.status(200).json({
                                    message: 'You have successfully logged in as a user',
                                    user: {
                                        id_user: UserId,
                                        email: email,
                                        role: userRole
                                    }
                                });
                            }
                        } else {
                            return res.status(400).json({ message: 'password inccorect' });
                        }
                    });
                } else {
                    return res.status(400).json({ message: 'email desnot exists' });
                }
            } else {
                return res.status(500).json({ message: "error in operation" });
            }
        });
    });
};
