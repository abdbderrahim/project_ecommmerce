const connection = require('../config/DB');


exports.GetProductById = (req,res) =>{
    const {id} = req.params;

    const  sql = 'select * from products where id_product = ?';
    connection.query(sql,[id],(err,result) =>{
        if(err){
            res.status(500).json({success: false,message: 'product not found'});
        }
        if(result.length === 0) return res.status(200).json({
            success: false,
            message: 'product not found'
        });
        res.status(200).json({
            success: true,
            product: result[0]
        });

    });
}