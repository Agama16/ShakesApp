const express = require('express');
const router= express.Router();



router.get('/weather', async(req,res)=>
{
    res.render("../View/weather/index");

})



module.exports=router;





