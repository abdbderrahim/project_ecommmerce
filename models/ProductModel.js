const connection = require('../config/DB');

const GetAllProducts = (callback) => {
    const query = "CALL GetAllProducts()";
    connection.query(query,(err,results) =>{
        if(err){
            callback(err,null);
        }else{
            callback(null,results[0]);
        }
    });
}

module.exports = {GetAllProducts};