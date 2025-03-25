const { error } = require('console');
const productModel = require('../models/ProductModel');


const GetAllProducts = (req,res) =>{
    productModel.GetAllProducts((err,results) =>{
        if(err){
            return res.status(500).json({
                message: 'error in fetching products',
                error:err
            });
        }

        if(results.length === 0){
            return res.status(404).json({
                message: 'No products found',
            });
        }

        res.status(200).json({
            message: 'Products fetched successfully',
            products: results
        });
    });
};

module.exports = {GetAllProducts};