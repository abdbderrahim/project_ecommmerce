const connection = require('../config/DB');


exports.GetAllUsers = (callback) =>{
    const sql = 'select * from users';
    connection.query(sql,(err,result) =>{
        if(err){
            return callback(err);
        }else{
            return callback(null,result);
        }
    });
}