const express = require('express');
const router= express.Router();
const controlles=require("../Controller/branch");

router.get('/get', async(req,res)=>
{
    const branchs= await controlles.getBranch({});
    //todo
    res.render("../View/branch/get", {branchs});

})

router.get('/delete', async(req,res)=>
{
    const branchs= await controlles.deleteBranch();
    //todo
    res.redirect("/branchs/get")
})

router.route('/create').post(controlles.createBranch);
router.get('/create', async(req,res)=>
{
    res.render("../View/branch/create");
})

module.exports=router;





