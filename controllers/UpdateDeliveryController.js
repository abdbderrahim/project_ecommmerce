const connection = require('../config/DB');




exports.UpdateDelivery = (req,res) => {
    const { delivery_status,expected_date,delivery_person} = req.body;
    const id = req.params.id;
    console.log('data:', req.body);
    const sql = 'update deliveries set delivery_status = ?, expected_date = ?, delivery_person = ? where id_delivery = ?';
    connection.query(sql,[delivery_status,expected_date,delivery_person,id],(err,results) =>{
        if(err){
            console.log(err);
           return res.status(500).json({success: false,message:'Error updating delivery'});
        }
        if(results.affectedRows === 0){
            return res.status(404).json({success: false,message:'Delivery not found'});
        }else{
            return res.status(200).json({success: true ,message:'Delivery updated successfully'});
        }
    })
}