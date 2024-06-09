const express = require('express');
const router= express.Router();
const controlles=require("../Controller/customer");

router.get('/get', async(req,res)=>
{
    const customers= await controlles.getCust({});
    //todo
    res.render("../View/customer/get", {customers});

})

router.get('/delete', async(req,res)=>
{
    const customers= await controlles.deleteCust();
    //todo
    res.redirect("/customers/get")
})

router.route('/create').post(controlles.createCustomer);
router.get('/create', async(req,res)=>
{
    res.render("../View/customer/create");
})


module.exports=router;





