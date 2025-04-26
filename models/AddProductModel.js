const { query } = require('express');
const connection = require('../config/DB');


AddProduct = (productData,callback) =>{
    const {name,description,price,stock,img_product,id_categorie} = productData;
    sql = 'Call AddProduct(?,?,?,?,?,?,@p_success,@p_message)';
    connection.query(sql,[name,description,price,stock,img_product,id_categorie],(err,result) =>{
        if(err){
            return callback(err,null);
        }

        connection.query('select @p_success as success, @p_message as message ',(err2,result2) =>{
            if(err2){
              return callback(err2,null);
            }
            const resultData = {
                success: result2[0].success,
                message: result2[0].message
            };
            return callback(null,resultData);
        });


   
    });
};

module.exports = {AddProduct};