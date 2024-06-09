const mongoose = require("mongoose");


const Customer = new mongoose.Schema({
  firstName: String,
  lastName: String,
  adress:String,
  userId:String,
  favProductsId:[Number],
   orderHistoryId: [Number], //array of ids of the ids of the orders of this customer
   gmail:String,
   password: String,
   birthDay:String,
   points:Number

});

module.exports=mongoose.model("customer", Customer)
