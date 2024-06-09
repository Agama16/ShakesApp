const mongoose = require("mongoose");

// Define a schema


const products = new mongoose.Schema({
  price:Number,
  foodType:String, //food, drink,cup...
  id:Number,
  name:String,
  //can i add here pic?
  otherCategories:String,
  points:Number //how much points does each product costs

});

module.exports=mongoose.model("products", products)