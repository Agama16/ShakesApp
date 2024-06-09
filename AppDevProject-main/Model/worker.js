const mongoose = require("mongoose");


const worker = new mongoose.Schema({
  userId:String,
  firstName:String,
  sureName:String,
  phone:Number,
  salary:Number,
  rank:String, //bartender, cassiere, maneger...
  branchId:Number,
  password:Number,
  

});
module.exports=mongoose.model("worker", worker)

