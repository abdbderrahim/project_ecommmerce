const GetAllUsersModel = require('../models/GetAllUsersModel');


exports.GetAllUsers = (req,res) =>{
    GetAllUsersModel.GetAllUsers((err,result) =>{
        if(err){
            return res.status(500).json({
                success: false,
                message: 'error to featched users'
            })
        }
        return res.status(200).json({
                success: true,
                message: 'users fetched successfully',
                users: result
        });
    });

}