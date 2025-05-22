const connection = require('../config/DB');

exports.logoutUser = (req,res) =>{
    req.session.destroy(err =>{
        if(err){
            return res.status(500).json({message: 'error to logout'});
        }
        res.clearCookie('connect.sid');
        res.json({message: 'logout success'});
        
        
    })
}