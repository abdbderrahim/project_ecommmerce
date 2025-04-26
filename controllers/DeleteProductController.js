const DeleteProductModel = require('../models/DeleteProduct');

exports.DeleteProduct = (req,res) =>{
    const {id} = req.body;
    console.log('recived id:', id);

    if(!id){
        return res.status(500).json({success:false,message: 'product id not found'});
    }

    DeleteProductModel.DeleteProduct(id,(err,result) =>{
        if(err){
            return res.status(500).json({success:false,message:'server error'});
        }
        return res.status(200).json({
            message:'product deleted successfully',
            result: result
        });
        
    });
}