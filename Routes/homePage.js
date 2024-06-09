const express = require('express');
const router= express.Router();

router.get('/', async(req,res)=>
{
    res.render("../View/homePage/homePage");

})

router.get('/admin', async(req,res)=>
{
    res.render("../View/homePage/homePageAdmin");

})

router.get('/customer', async(req,res)=>
{
    res.render("../View/homePage/homePageCustomer");

})

module.exports=router;
