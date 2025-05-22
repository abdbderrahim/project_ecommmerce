const connection = require('../config/DB');


exports.checkAuth = (req,res) =>{
    if(req.session.user){
        res.json({loggedIn: true, user: req.session.user});
    }else{
        res.json({loggedIn: false})
    }
};