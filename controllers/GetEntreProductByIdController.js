const connection = require('../config/DB');


exports.GetEntreProductById = (req,res) =>{
    const id = req.params.id;
    const sql  = "SELECT * FROM entre_products WHERE id_entre = ?";
    connection.query(sql,[id],(err,result) =>{
        if(err){
          return  res.status(500).json({
                success: false,
                message:  "error"
            })
        }
        if(result.length === 0){
            return res.status(404).json({
                success: false,
                message: "Product not found"


            })
        }
        res.status(200).json({
            success: true,
            message: "Product found",
            data: result

        })

    })


}