const express = require('express');
const req = require('express/lib/request');
const router= express.Router();
const controllesProduct=require("../Controller/product");
const serviceProduct=require("../service/product")
// const filterService=require("../service/myFilter")
const filterController=require("../Controller/myFilter")

// router.get('/product', async(req,res)=>
// {

//     const products=await serviceProduct.getProductByInfo(req.body.points, req.body.foodType, req.body.price)
//     res.render("../View/product/get", {products});

// })

router.get("/productFilter", filterController.filterFromProduct);
router.post("/productFilter", filterController.getProduct);

router.get("/workerFilter", filterController.filterFromWorker);
router.post("/workerFilter", filterController.getWorker);


module.exports=router;





