const UpdateEntreProduct = require('../models/UpdateEntreProductModel');


exports.UpdateEntreProductController = (req,res) =>{
    const{id,quantity,id_product} = req.body;

    UpdateEntreProduct.UpdateEntreProduct(id,quantity,id_product,(err,result) =>{
        if(err){
            return res.status(500).json({
                success: false,
                message: 'server error while  updating product',
            });
        }

        return res.status(200).json(result);
    })
}