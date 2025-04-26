const express = require('express');
const path = require('path');
const multer = require('multer');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const categoriesRoutes = require('./routes/categoryRoutes');
const productsRoutes = require('./routes/ProductRoutes');
const registerRoutes = require('./routes/registerRoute');
const loginRoutes = require('./routes/loginRoute');
const OrderRoutes = require('./routes/OrderRoutes');
const CartItemRoutes = require('./routes/CartItemRoutes');
const AddOrderRoute = require('./routes/addOrderRoute');
const ClearCartRoure = require('./routes/ClearCartRoute');
const AddProduRoute = require('./routes/AddProductRouts');
const GetAllProducts = require('./routes/GetAllProductsRoute');
const DeleteProductRoute = require('./routes/DeleteProductRoute');
const GetProductById = require('./routes/Get_product_by_id_route');
const UpdateProduct = require('./routes/UpdateProduct');
const GetAllUsers = require('./routes/GetAllUsersRoute');
const DeleteUser = require('./routes/DeleteUserRoute');
const port = 9000;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/slide'); // specify folder to save uploaded files
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname    (file.originalname)); // use the original file extension
    }
  });

const upload = multer({ storage: storage });

app.post('/upload', upload.single('img_product'), (req, res) => {
    if (req.file) {
      res.send('File uploaded successfully');
    } else {
      res.send('No file uploaded');
    }
});




app.post('/upload', upload.single('img_product'), (req, res) => {
    if (req.file) {
      res.send('File uploaded successfully');
    } else {
      res.send('No file uploaded');
    }
  });

  


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(categoriesRoutes);
app.use(productsRoutes);
app.use(registerRoutes);
app.use(loginRoutes);
app.use(OrderRoutes);
app.use(CartItemRoutes);
app.use(ClearCartRoure);
app.use(AddOrderRoute);
app.use(AddProduRoute);
app.use(GetAllProducts);
app.use(DeleteProductRoute);
app.use(GetProductById);
app.use(UpdateProduct);
app.use(GetAllUsers);
app.use(DeleteUser);
app.use('/slide', express.static(path.join(__dirname, 'public', 'slide')));
app.use('/slide', express.static('public/slide'));

app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname, 'public', 'indexx.html'));
})
app.get('/admin',(req,res) =>{
    res.sendFile(path.join(__dirname, 'public', 'admin_page.html'));
})

app.get('/users',(req,res) =>{
  res.sendFile(path.join(__dirname,'public','UserManagement.html'))
})


app.listen(port, () =>{
    console.log(`Server is running on port http://localhost:${port}`);
})





