

const { request, response } = require("express");
const Worker= require("../Model/worker");
const Service= require("../service/worker");

const createWorker= async(req,res)=>
{
    return await Service.createWorker(
        req.body.userId, req.body.firstName, req.body.sureName,req.body.phone, req.body.salary, req.body.rank, req.body.branchId,req.body.password)

}

function getWorker(filter)
{
    return Service.getWorker(filter);
}

const deleteWorker = async(req,res)=>
{
    await Service.deleteAllWorkers();
}

module.exports= {createWorker, deleteWorker, getWorker};
