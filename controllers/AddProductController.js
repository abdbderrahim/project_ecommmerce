const AddProducModel = require('../models/AddProductModel');


 exports.AddProductController = (req,res) =>{
    const {name,description,price,stock,id_categorie} = req.body;
    const img_product = req.file ? 'slide/' + req.file.filename : null;

    if (!name || !description || !price || !stock || !img_product || !id_categorie) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    console.log("body:",req.body);
    console.log('file:',req.file);
       

   const productData = {
    name, description, price, stock, img_product, id_categorie
   };

   AddProducModel.AddProduct(productData,(err,result) =>{
    if(err){
        return res.status(500).json({success:false, message: 'error to adding product'});
    }
    return res.status(200).json(result);
   })

  



}