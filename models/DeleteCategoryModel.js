const connection = require('../config/DB');


exports.DeleteCategory = (id,callback) =>{
    const sql = 'Call DeleteCategory(?,@p_success,@p_message)';
    connection.query(sql,[id],(err,result) =>{
        if(err){
            return callback(null,err);
        }

        connection.query('select @p_success as success , @p_message as message',(err2,result2) =>{
            if(err2){
                return callback(null,err2);
            }

            const data = {
                success: result2[0].success,
                message: result2[0].message
            };

            return callback(null,data);
        })
    })
}