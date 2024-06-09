const { render } = require('ejs');
const express = require('express');
const req = require('express/lib/request');
const router= express.Router();
const controlles=require("../Controller/product");
const service=require("../service/product")

router.get('/get', async(req,res)=>
{
    const products= await controlles.getProduct({});
    //todo
    res.render("../View/product/get", {products});

})

router.get('/delete', async(req,res)=>
{
    const products= await controlles.deleteProduct();
    res.redirect("/products/get")
})

router.route('/create').post(controlles.createProduct);

router.get('/create', async(req,res)=>
{
    res.render("../View/product/create");
})

router.get('/getByInfo', async(req,res)=>
{
    res.render("../View/myFilters/getFilterProducts"); ///////////////////////////////////////////////get-not get
})

router.get('/getProducts', async(req,res)=>
{
    const products= await controlles.getProduct({});
    res.json(products)

})

router.get('/graph', async(req,res)=>
{
    const products= await controlles.getProduct({});
    res.render("../View/graph/graphH")

})
module.exports=router;





