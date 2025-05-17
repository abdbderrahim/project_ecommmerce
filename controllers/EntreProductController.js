const session = require('express-session');
const EntreProduct = require('../models/EntreProductModel');


exports.EntreProductModel = (req,res) =>{
    const {quantity,id_product} = req.body;
    const id_user = req.session.user.id_user;

    EntreProduct.EntreProduct(quantity,id_product,id_user,(err,result) =>{
        if(err){
            return res.status(500).json({
                success: false,
                message: 'error to database'
            });
        }

        return res.status(200).json(result);
    })
}