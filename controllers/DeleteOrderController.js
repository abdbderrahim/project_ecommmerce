const connection = require('../config/DB');

exports.DeleteOrder = (req, res) => {
    const { id } = req.params; // استخدم req.params مباشرةً وليس req.params.id
    const sql = 'CALL DeleteOrder(?, @p_success, @p_message)';

    // تنفيذ الإجراء
    connection.query(sql, [id], (err) => {
        if (err) {
            console.error('خطأ في الإجراء:', err);
            return res.status(500).json({ message: 'Error executing stored procedure' });
        }

        // قراءة متغيرات الخرج
        connection.query('SELECT @p_success AS success, @p_message AS message', (err, result) => {
            if (err) {
                console.error('خطأ في قراءة النتائج:', err);
                return res.status(500).json({ message: 'Error retrieving output' });
            }

            const output = result[0];
            res.json({
                success: output.success,
                message: output.message
            });
        });
    });
};
