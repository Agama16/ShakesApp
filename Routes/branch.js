const express = require('express');
const router= express.Router();
const controlles=require("../Controller/branch");






router.get('/get', async(req,res)=>
{
    const branchs= await controlles.getBranch({});
    
    res.render("../View/branch/get", {branchs});

})



router.get('/delete', async(req,res)=>
{
    const branchs= await controlles.deleteBranch();
    res.redirect("/branchs/get")
})

router.route('/create').post(controlles.createBranch);
router.get('/create', async(req,res)=>
{
    res.render("../View/branch/create");
})

router.get('/getMap', async(req,res)=>
{
    const branchs= await controlles.getBranch({});
    res.render("../View/branch/getMap");

})

router.get('/getBranchs', async(req,res)=>
{
    const branchs= await controlles.getBranch({});
     res.json(branchs)

})




module.exports=router;





