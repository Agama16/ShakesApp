const mongoose = require("mongoose");


const giftCard = new mongoose.Schema({
  id:Number,
  amount:Number, 
  expiry:String
});

module.exports=mongoose.model("giftCard", giftCard)