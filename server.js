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
const getAllCategories = require('./routes/GetCategoriesRoute');
const addCategory = require('./routes/AddGategoryRoute');
const GetCategoryById = require('./routes/GetCategoryByIdRoute');
const UpdateCategory = require('./routes/UpdateCategory');
const DeleteCategory = require('./routes/DeleteCategoryroute');
const GetAllOrders = require('./routes/GetAllOrdersroute');
const UpdateOrderStatus = require('./routes/UpdateOrderStatus');
const EntreProduct = require('./routes/AddEntreProductRoute');
const GetAllEntreProduct = require('./routes/GetAllEntreProductRoute');
const DeleteEntreProduct = require('./routes/DeleteEntreProduct');
const GetEntreProductById = require('./routes/GetEntreProducrRoute');
const UpdateEntreProduct = require('./routes/UpdateEntreProductRoute');
const AddOrderAndDelivery = require('./routes/AddOrderAndDelivery');
const GetDeliveryData = require('./routes/GetDeliveyData');
const UpdateDelivery = require('./routes/UpdateDelivery');
const DeleteDelivery = require('./routes/DeleteDelivery');
const GetPeoductsByCategory = require('./routes/GetProductsByCategoryRoute');
const SearchProduct = require('./routes/SearchProductRoute');
const authRoute = require('./routes/AuthRoute');
const logout = require('./routes/logoutRoute');
const port = 9000;


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/slide'); 
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname    (file.originalname)); 
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


  app.use(session({
    secret: 'strike102030',  
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }   
}));

  


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
app.use(getAllCategories);
app.use(addCategory);
app.use(GetCategoryById);
app.use(UpdateCategory);
app.use(DeleteCategory);
app.use(GetAllOrders);
app.use(UpdateOrderStatus);
app.use(EntreProduct);
app.use(GetAllEntreProduct);
app.use(DeleteEntreProduct);
app.use(GetEntreProductById);
app.use(UpdateEntreProduct);
app.use(AddOrderAndDelivery);
app.use(GetDeliveryData);
app.use(UpdateDelivery);
app.use(DeleteDelivery);
app.use(GetPeoductsByCategory);
app.use(SearchProduct);
app.use(authRoute);
app.use(logout);

app.use('/slide', express.static(path.join(__dirname, 'public', 'slide')));
app.use('/slide', express.static('public/slide'));

app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname, 'public', 'indexx.html'));
})
app.get('/admin',(req,res) =>{
    res.sendFile(path.join(__dirname, 'public', 'admin_page.html'));
})


app.get('/cart',(req,res) =>{
  res.sendFile(path.join(__dirname, 'public', 'CartItems.html'));
})



app.get('/users',(req,res) =>{
  res.sendFile(path.join(__dirname,'public','UserManagement.html'))
})

app.get('/card',(req,res) =>{
  res.sendFile(path.join(__dirname,'public','DataCard.html'))
})

app.get('/checkout',(req,res) =>{
  res.sendFile(path.join(__dirname,'public','Checkout.html'))
})


app.get('/delivery',(req,res) =>{
  res.sendFile(path.join(__dirname,'public','DeliveryManagement.html'))
})





app.listen(port, () =>{
    console.log(`Server is running on port http://localhost:${port}`);
})





