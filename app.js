const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.set('view engine', 'ejs');
const mongoose = require('mongoose');
const Customer = require("./Model/Customer");
const Worker=require("./Model/worker");
const Product=require("./Model/product");
const Branch=require("./Model/Branch");
mongoose.set('strictQuery', false);
var path = require('path');

const session = require('express-session');
app.use(session({
    secret: 'foo',    
    saveUninitialized: false,
    resave: false
}))

app.set("view engine", "ejs"); //important!!!!!
app.use(express.urlencoded({ extended: false }));  
//app.use("/", require("./Routes/logIn"));

mongoose.connect("mongodb://127.0.0.1:27017")

    const customerRouter = require('./Routes/customer')
    const workerRouter=require('./Routes/worker')
    const productRouter=require('./Routes/product')
    const branchRouter=require('./Routes/branch')
    const logInRouter=require('./Routes/logIn')
    const homePageRouter=require('./Routes/homePage')
    const menuRouter=require('./Routes/menu')
    const filterRouter=require('./Routes/myFilter')
    const cartRouter= require('./Routes/cart')
    const weatherRouter= require('./Routes/weather')


    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json());
    app.use('/customers',customerRouter);
    app.use('/workers', workerRouter);
    app.use('/products', productRouter);
    app.use('/branchs', branchRouter);
    app.use('/logIn', logInRouter)
    app.use('/',homePageRouter)
    app.use('/homePageAdmin',homePageRouter)
    app.use('/homePageCustomer',homePageRouter)
    app.use('/menu',menuRouter )
    app.use(express.static(path.join(__dirname+'/View')))
    app.use('/MyFilter', filterRouter)
    app.use('/cart', cartRouter)
    app.use('/weather', weatherRouter)




    app.listen(4000)

run()
async function run(){
    
}
