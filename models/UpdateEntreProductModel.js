const connection = require('../config/DB');


exports.UpdateEntreProduct = (id,quantity,id_product,callback) =>{

    const sql = 'call UpdateEntreProduct(?,?,?,@p_success,@p_message)';
    connection.query(sql,[id,quantity,id_product],(err,result) =>{
        if(err){
           return callback(err,null);
        }

        connection.query('select @p_success as success ,@p_message as message',(err2,result2) =>{
            if(err2){
                return callback(err2,null);
            }
            const data  = ({
                success : result2[0].success,
                message : result2[0].message
            })

            return callback(null,data);
        })
    })
}