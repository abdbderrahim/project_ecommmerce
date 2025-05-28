const connection = require('../config/DB');


exports.delleteCartItem = (req,res) =>{
    const id_user = req.session.user.id_user;
    const id_product = req.body.id_product;
    console.log('id product:', id_product)
    console.log('iduser:', id_user)


    if(!id_user){
       return res.status(401).json({success: false,message: 'Unauthorized'});
    }


    const sql = 'delete from cart_items where id_product  = ? and id_user = ?';
    connection.query(sql,[id_product,id_user] ,(err,result) =>{
        if(err){
            return res.status(500).json({success: false,message: 'Error delete item'});
        }

        if(result.affectedRows > 0){
            return res.status(200).json({success: true,message: 'Item deleted successfully'});
        }
    })
}