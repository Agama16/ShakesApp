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
    //todo
    res.redirect("/products/get")
})

router.route('/create').post(controlles.createProduct);
router.get('/create', async(req,res)=>
{
    res.render("../View/product/create");
})

// //router.route('/getByInfo').post
router.get('/getByInfo', async(req,res)=>
{
    //res.redirect("/filter/product")
    res.render("../View/myFilters/filterProduct");
    // const products=await service.getProductByInfo(req.body.points, req.body.foodType, req.body.price)
    // res.render("../View/product/get", {products});
})

module.exports=router;





