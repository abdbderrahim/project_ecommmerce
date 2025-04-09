const express = require('express');
const path = require('path');
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
const port = 9000;

app.use(session({
    secret: process.env.SESSION_SECRET || 'mysecret',  
    resave: false,
    saveUninitialized: false,  
    cookie: {
        secure: process.env.NODE_ENV === 'production', 
        httpOnly: true, 
        maxAge: 1000 * 60 * 60 * 24  
    }
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
app.use('/slide', express.static(path.join(__dirname, 'public', 'slide')));
app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname, 'public', 'indexx.html'));
})
app.get('/CartItems',(req,res) =>{
    res.sendFile(path.join(__dirname, 'public', 'CartItems.html'));
})


app.listen(port, () =>{
    console.log(`Server is running on port http://localhost:${port}`);
})





