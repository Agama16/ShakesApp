const mongoose = require("mongoose");


const Customer = new mongoose.Schema({
  firstName: String,
  lastName: String,
  adress:String,
  userId:String,
  favProductsId:[Number],
//   creditCard: //todo maybe add credit card
   orderHistoryId: [Number], //array of ids of the ids of the orders of this customer
   gmail:String,
   password: String,
   birthDay:String,
   relatedGiftCards:[Number], //array of related giftCardIDs
   points:Number

});

module.exports=mongoose.model("customer", Customer)
