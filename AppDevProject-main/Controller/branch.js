const { request, response } = require("express");
const Branch= require("../Model/Branch");
const Service= require("../service/branch");

const createBranch= async(req,res)=>
{
    return await Service.createBranch(req.body.manager,req.body.branchId ,req.body.adress)

}

function getBranch(filter)
{
    return Service.getBranch(filter);
}

const deleteBranch = async(req,res)=>
{
    await Service.deleteAllBrunch();
}

module.exports= {createBranch, deleteBranch,getBranch};
