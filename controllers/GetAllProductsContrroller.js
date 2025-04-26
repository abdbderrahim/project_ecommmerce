const GetAllProductsModel = require('../models/GetAllProductsModel');

exports.GetAllProducts = (req,res) =>{
    GetAllProductsModel.GetAllProducts((err,result) =>{
        if(err){
           return res.status(500).json({
                success: false,
                message: 'failde to fetch products',
                error: err.message
            });
        }
       return res.status(200).json({
            success: true,
            message: 'products fetched successfully',
            products: result
        });
    });
};