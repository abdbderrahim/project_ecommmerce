const { query } = require('express');
const connect  = require('../config/DB');


exports.ClearCart = (req,res) =>{
    const id_user = req.session.user.id_user;
const sql  = 'call ClearCart(?,@p_success,@p_message)';
connect.query(sql,(id_user),(err,result) =>{
    if(err){
        return res.status(500).json({message: 'error during clear cart'});
    }

    connect.query('SELECT @p_success AS success, @p_message AS message, @p_id_user AS id_user', (err, result) =>{
        if(err){
            return res.status(500).json({message: 'error during clear cart'});
        }
        if(result && result.length > 0){
            const success = result[0].success;
            const message = result[0].message;
            return res.status(200).json({message: message,success: success})
        }else{
                return res.status(400).json({message: message,success: success})
            }
        

    })
})
}