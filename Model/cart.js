const mongoose = require("mongoose");


const cart = new mongoose.Schema({
    price:Number,
    itemId:[Number], //the ids of the ordered products or materiels
    custId:Number //the id of whose ordering, the cart's id is the custs id
});

module.exports=mongoose.model("carts", cart)
