const mongoose = require("mongoose");



const Branch = new mongoose.Schema({
  maneger: Number, //id
  branchId: Number,
 adress:String
});

module.exports=mongoose.model("branch", Branch)