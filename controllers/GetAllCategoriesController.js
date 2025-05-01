const getAllCategories = require('../models/CategoryManagement');

exports.getAllCategories = (req,res) =>{{
    getAllCategories.GetAllCategories((err,result) =>{
        if(err){
            res.status(500).json({message: 'failed to added category'});
        }else{
            res.status(200).json({message: 'category  fetched successfully', data: result});
        }
    })
}}