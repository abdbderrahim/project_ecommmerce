const addCategory = require('../models/AddCategoryModel');

exports.addCategory = (req,res) =>{
    const {name,description} = req.body;

 
    addCategory.AddCategory(name,description,(err,result) =>{
        if(err){
          return  res.status(500).json({
                success: false,
                message:'failed to added category'
            })
        }

        res.status(200).json(result);

    })
}