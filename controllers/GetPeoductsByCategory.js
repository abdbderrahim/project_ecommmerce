const connection = require('../config/DB');


exports.GetProductsByCategory = (req,res) =>{
    const category_id = req.params.id;

    const sql = 'select * from products where id_categorie = ?';
    connection.query(sql,[category_id] ,(err,result) =>{
        if(err){
            console.error('Error fetching products by category:', err);
            return res.status(500).json({message: 'error to get products'});
        }

        return res.status(200).json(result);
    })
}