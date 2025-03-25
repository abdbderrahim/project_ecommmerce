const connection = require('../config/DB');


   exports.getAllCategories = (req,res) => {
    query = "call getAllCategories()";
    connection.query(query,(err,results) =>{
        if(err){
            console.log(err);
            res.status(500).send({message: "Error fetching categories"});
        }else{
            res.send(results[0]);
        }
    });
   }