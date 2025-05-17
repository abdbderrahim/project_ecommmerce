const connection = require('../config/DB');


exports.EntreProduct = (quantity,id_product,id_user,callback) =>{
    const sql = 'Call AddEntryProduct(?,?,?,@p_success,@p_message)';
    connection.query(sql,[quantity,id_product,id_user],(err,result) =>{
        if(err){
            return callback (err,null)
        }

        connection.query('select @p_success as success, @p_message as message',(err2,result2) =>{
            if(err2){
                return callback (err2,null);
            }

            const data = {
                success: result2[0].success,
                message: result2[0].message
            };

            return callback(null,data);
        })
    })
}