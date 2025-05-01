const connect = require('../config/DB');



exports.AddCartItem = (req,res) =>{
    const {quantity,id_product} = req.body;
    const id_user = req.session.user.id_user;
    

 console.log('quantity:',quantity);
 console.log('prouct id:' ,id_product);
 console.log('id user:', id_user)



    const sql = "Call AddCartItem(?,?,?, @p_success, @p_message)";
    connect.query(sql,[quantity,id_product,id_user], (err,result) =>{
        if(err){
            return res.status(500).json({message: 'Error to add Cart item'});
        }
        connect.query('select @p_success as success, @p_message as message',(err,result) =>{
          console.log(result);
          if(err){
            return res.status(500).json({message: 'Error to add Cart item'});
          }  
          const success = result[0].success;
          const message = result[0].message;
          if(result && result.length > 0 && result[0].success !== 0){
           
             res.status(200).json({success: true, message: message});

          }else{
             res.status(200).json({success: false, message: message});

          }
        });
    });
}