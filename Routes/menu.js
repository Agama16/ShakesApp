const express = require('express');
const session = require('express-session');
const router= express.Router();
const controlles=require("../Controller/product");
const controllesCust= require("../Controller/customer")
const serviceCust=require("../service/customer")



router.get('/', async(req,res)=>
{
    const products=await controlles.getProduct({});
    res.render("../View/menu/get", {products});

})

router.get('/admin', async(req,res)=>
{
    const products=await controlles.getProduct({});
    res.render("../View/menu/getAdmin", {products});

})

router.get('/fav', async(req,res)=>
{
    const cust= req.session.userId
    const fav= await serviceCust.getCustFavProductsById(cust)
    res.render("../View/customer/getFav", {fav})

})



router.get('/buyNow/:id', async(req,res)=>
{
    const id= req.params.id
    const cust= req.session.userId
    const temp=await serviceCust.updateOrderHistory(cust,id)
   const history= await serviceCust.getCustHistoryById(cust)
   res.redirect("/menu/history")

})



router.get('/addToFav/:id', async(req,res)=>
{
    const id= req.params.id
    const cust= req.session.userId
    const temp=await serviceCust.updateFavProducts(cust,id)
   const fav= await serviceCust.getCustFavProductsById(cust)
    res.redirect("/menu/fav")


})

router.get('/deleteAllFav', async(req,res)=>
{
    const cust= req.session.userId
    await serviceCust.deleteAllFav(cust)
    res.redirect("/menu/")
})

router.get('/deleteOneFav/:id', async(req,res)=>{
    const id= req.params.id
    const cust= req.session.userId
    await serviceCust.deleteFavOne(cust,id)
   res.redirect("/menu/fav")
})


module.exports=router;
