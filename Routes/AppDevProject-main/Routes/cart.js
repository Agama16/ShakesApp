const express = require('express');
const session = require('express-session');
const router= express.Router();
const controllesPro=require("../Controller/product");
const controllesCust= require("../Controller/customer")
const serviceCart=require("../service/cart")

//to show cart
router.get('/', async(req,res)=>
{
    const cust= req.session.userId
    const items= await serviceCart.getCartItemsById(cust)
    res.render("../View/cart/get", {items})

})

//add to cart
router.get('/addToCart/:id', async(req,res)=>
{
    const id= req.params.id
    const cust= req.session.userId
    await serviceCart.updateCartItem(cust,id)
    res.redirect("/cart/")

})

router.get('/deleteAllCart', async(req,res)=>
{
    const cust= req.session.userId
    await serviceCart.deleteAllItemsCart(cust)
     res.redirect("/menu/")
})

router.get('/deleteOneItem/:id', async(req,res)=>{
    const id= req.params.id
    const cust= req.session.userId
    await serviceCart.deleteItemOne(cust,id)
    res.redirect("/cart/")

})

router.get('/buy', async(req,res)=>{
    const cust= req.session.userId
    const total= serviceCart.getPriceById(cust)
    await serviceCart.deleteAllItemsCart(cust)
    res.render("../View/cart/buy", {total})

    
})





module.exports=router;
