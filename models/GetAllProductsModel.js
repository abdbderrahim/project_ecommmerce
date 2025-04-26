const connection = require('../config/DB');


exports.GetAllProducts = (callback) =>{
    sql = 'Call GetAllProducts()';
    connection.query(sql,(err,result) =>{
        if(err){
            callback(err,null);
        }else{
            callback(null,result[0]);
        }
       
    });
};