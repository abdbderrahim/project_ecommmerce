const connect = require('../config/DB');



exports.AddCartItem = (req,res) =>{
    const {quantity,id_product,id_order} = req.body;
    const id_user = req.session.user.id_user;

    const sql = "Call AddCartItem(?,?,?,?, @p_success, @p_message)";
    connect.query(sql,[quantity,id_product,id_order,id_user], (err,result) =>{
        if(err){
            return res.status(500).json({message: 'Error to add Cart item'});
        }
        connect.query('select @p_success as success, @p_message as message',(err,result) =>{
          if(err){
            return res.status(500).json({message: 'Error to add Cart item'});
          }  
          if(result && result.length > 0 && result[0].success !== 0){
            const success = result[0].success;
            const message = result[0].message;
             res.status(200).json({success: success, message: message});

          }else{
             res.status(200).json({success: success, message: message});

          }
        });
    });
}