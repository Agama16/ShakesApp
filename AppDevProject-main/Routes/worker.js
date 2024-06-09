const express = require('express');
const req = require('express/lib/request');
const router= express.Router();
const controlles=require("../Controller/Worker");
const service=require("../service/worker")

router.get('/get', async(req,res)=>
{
    const workers= await controlles.getWorker({});
    //todo
    res.render("../View/worker/get", {workers});

})

router.get('/delete', async(req,res)=>
{
    const workers= await controlles.deleteWorker();
    //todo
    res.redirect("/workers/get")
})

router.route('/create').post(controlles.createWorker);
router.get('/create', async(req,res)=>
{
    res.render("../View/worker/create");
})

router.get('/deleteOneWorker/:userId', async(req,res)=>
{
    const userId= req.params.userId
    await service.deleteOneWorker(userId)
    res.redirect("/workers/get")

})


module.exports=router;





