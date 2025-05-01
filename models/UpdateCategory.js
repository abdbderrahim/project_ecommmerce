const connection  = require('../config/DB');


exports.UpdateCategory = (id,name,description,callback) =>{
    const sql = 'Call UpdateCategory(?,?,?,@p_success,@p_message)';
    connection.query(sql,[id,name,description],(err,result) =>{
        if(err){
            return callback(null,err);
        }
        connection.query('select @p_success as success,@p_message as message',(err2,result2) =>{

            const data = {
                success: result2[0].success,
                message: result2[0].message
            }

            if(err2){
                return callback(null,err2);
            }

            return callback(null,data);

        })
    })
}