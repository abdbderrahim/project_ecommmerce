const DeleteCategory = require('../models/DeleteCategoryModel');

exports.DeleteCategory = (req,res) =>{
    const {id} = req.body;
    console.log('id:',id);

    DeleteCategory.DeleteCategory(id,(err,result) =>{
        if(err){
            return res.status(500).json({
                success: false,
                message: 'failed to deleted category'
            });
        }

        return res.status(200).json( result);
    })
}