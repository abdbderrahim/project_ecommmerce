const connection = require('../config/DB');
 

exports.GetDeliveryData = (req,res) =>{
    const sql = 'select * from deliveries ';
    connection.query(sql,(err,result) =>{
        if(err){
            console.log(err);
          return  res.status(500).json({message : 'Error in fetching data'});
        }
        return res.status(200).json(result);

    })
}