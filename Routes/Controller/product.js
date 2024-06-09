const { request, response } = require("express");
const Product= require("../Model/product");
const Service= require("../service/product");

const createProduct= async(req,res)=>
{
    return await Service.createProduct(req.body.price, req.body.foodType, req.body.name, req.body.points, req.body.id)
}

function getProduct(filter)
{
    return Service.getProduct(filter);
}

const deleteProduct = async(req,res)=>
{
    await Service.deleteAllProducst();
}

module.exports= {createProduct, deleteProduct, getProduct};
