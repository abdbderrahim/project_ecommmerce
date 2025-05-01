const connection = require('../config/DB');



exports.GetAllCategories = (callback) =>{
    const sql = 'Call getAllCategories()';
    connection.query(sql,(err,result) =>{
        if(err){
            callback(err,null);
        }else{
            callback(null,result[0]);

        }
    });
};