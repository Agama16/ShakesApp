const mongoose = require("mongoose");


const cart = new mongoose.Schema({
    //id:Number,
    // branchId:Number,
    price:Number,
    itemId:[Number], //the ids of the ordered products or materiels
    custId:Number //the id of whose ordering
});

module.exports=mongoose.model("carts", cart)