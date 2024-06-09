
const { request, response } = require("express");
const serviceProduct = require("../service/product")
const serviceWorkers=require("../service/worker")
//const { use } = require("../Routes/menu")


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

// const getProductByInfo= async(req,res)=>
// {
//     return await Service.getProductByInfo(req.body.points, req.body.foodType, req.body.price)
// }

// async function logIn(req, res) {
//     const { userId, password } = req.body
  
//     const result = await logInService.logIn(userId, password)
//     const type= await logInService.logInType(userId,password)
//     if (result && type=="admin") {
//       req.session.userId = userId
//       req.session.save()
//       res.redirect('/homePageAdmin/admin')
//     }
//     else if (result && type=="customer") {
//       req.session.userId = userId
//       req.session.save()
//       res.redirect('/homePageCustomer/customer')
//     }
//     else
//       res.redirect('/logIn/error')
//   }

module.exports = {
    filterFromProduct,
    getProduct,
    filterFromWorker,
    getWorker
  }
