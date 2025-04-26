const connection = require('../config/DB');

exports.DeleteUser = (id,callback) =>{
    const sql = 'Call DeleteUser(?,@p_success,@p_message)';
    connection.query(sql,[id],(err,result) =>{
        if(err){
            return callback(err,null);

        }
        connection.query('select @p_success as success,@p_message as message',(err2,result2) =>{
            if(err2){
                callback(err2,null);
            }else{
                console.log('result2 =>', result2);
               
               const resultData = {
                 success: result2[0].success,
                 message: result2[0].message
               }

               return callback(null,resultData);

            }
        })
    })
}