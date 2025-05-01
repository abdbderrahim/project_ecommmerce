const connection = require('../config/DB');

exports.GetAllOrders = (req,res) =>{
    const sql = 'select * from orders';
    connection.query(sql,(err,result) =>{
        if(err){
            return res.status(500).json({
                success: false,
                message: 'failed to fetched orders'
            })

           
        }

        return res.status(200).json({
            success: true,
            message: 'orders fetched successfully',
            data: result
        });
    })
}