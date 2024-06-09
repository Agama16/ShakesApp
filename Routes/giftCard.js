const express = require('express');
const router= express.Router();
const controlles=require("../Controller/giftCard");

router.get('/get', async(req,res)=>
{
    const giftCards= await controlles.getGiftCard({});
    //todo
    res.render("../View/giftCard/get", {giftCards});

})

router.get('/delete', async(req,res)=>
{
    const giftCards= await controlles.deleteGiftCard();
    //todo
    res.redirect("/giftCards/get")
})

router.route('/create').post(controlles.createGiftCard);
router.get('/create', async(req,res)=>
{
    res.render("../View/giftCard/create");
})

module.exports=router;





