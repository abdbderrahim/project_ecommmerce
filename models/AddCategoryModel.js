const connection = require('../config/DB');

exports.AddCategory = (name,description,callback) =>{
    const sql = 'Call addCategory(?,?,@p_success,@p_message)';

    connection.query(sql,[name,description],(err,result) =>{
        if(err){
           return callback(null,err);
        }

        connection.query('select@p_success as success,@p_message as message',(err2,result2) =>{

            if(err2){
             return  callback(err2,null);
            }

            const resultData = {
                success: result2[0].success,
                message: result2[0].message
             }

             return callback(null,resultData);
        })
    })
}