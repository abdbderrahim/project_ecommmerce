const connection = require('../config/DB');

exports.DeleteProduct = (id,callback) =>{
   const sql = 'Call  DeleteProduct(?,@p_success,@p_message)';
   connection.query(sql,[id],(err,result) =>{
    if(err){
        return callback(err);
    }

    connection.query('select @p_success as success, @p_message as message',(err2,result2) =>{
        if(err2){
            return callback(err,null);
        }
        const resultData = {
            success: result2[0].success,
            message: result2[0].message
        };

        return callback(null,resultData)
        console.log(result2);
    });
   });
}