
const { request, response } = require("express");
const serviceProduct = require("../service/product")
const serviceWorkers=require("../service/worker")


function filterFromProduct(req, res) { res.render("../View/myFilters/filterProduct", {}) }

async function getProduct(req,res)
{
    const products= await serviceProduct.getProductByInfo(req.body.points, req.body.foodType, req.body.price)
    res.render("../View/myFilters/getFiltersProducts", {products})

}

function filterFromWorker(req, res) { res.render("../View/myFilters/filterWorkers", {}) }

async function getWorker(req,res)
{
    const workers= await serviceWorkers.getWorkerByInfo(req.body.salary, req.body.rank, req.body.branchId)
    res.render("../View/myFilters/getFiltersWorker", {workers})

}



module.exports = {
    filterFromProduct,
    getProduct,
    filterFromWorker,
    getWorker
  }
