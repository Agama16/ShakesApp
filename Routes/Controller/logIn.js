
const { request, response } = require("express");
const logInService = require("../service/logIn")
const customerService= require("../service/customer")
const adminService=require("../service/worker")
const { use } = require("../Routes/menu")

function isLoggedIn(req, res, next) {
  if (req.session.userId != null)
    return next()
  else
    res.redirect('/logIn')
}



function logInForm(req, res) { res.render("../View/logIn/logIn", {}) }

function error(req, res) {res.render("../View/logIn/error")}

function logOut(req, res) {
  req.session.destroy(() => {
    res.redirect('/logIn/logIn');
  });
}

async function logIn(req, res) {
  const { userId, password } = req.body

  const result = await logInService.logIn(userId, password)
  const type= await logInService.logInType(userId,password)
  if (result && type=="admin") {
    req.session.userId = userId
    req.session.save()
    res.redirect('/homePageAdmin/admin')
  }
  else if (result && type=="customer") {
    req.session.userId = userId
    req.session.save()
    res.redirect('/homePageCustomer/customer')
  }
  else
    res.redirect('/logIn/error')
}

function registerFormCust(req, res) { res.render("../View/logIn/registerCustomer", {}) }

function registerFormAdmin(req, res) { res.render("../View/logIn/registerAdmin", {}) }


async function registerCust(req, res) {
  const firstName= req.body.firstName;
  const sureName= req.body.sureName;
  const adress= req.body.adress;
  const userId= req.body.userId;
  const password= req.body.password;
  const birthDay= req.body.birthDay;
  const gmail= req.body.gmail;


  
  await customerService.createCust(firstName, sureName, adress,userId,password,birthDay,gmail)
  req.session.userId=userId
  req.session.save()

  res.redirect('/homePageCustomer/customer')   
}

async function registerAdmin(req, res) {

  const userId= req.body.userId;
  const firstName= req.body.firstName;
  const sureName= req.body.sureName;
  const phone= req.body.phone;
  const salary= req.body.salary;
  const rank= req.body.rank;
  const branchId= req.body.branchId;
  const password= req.body.password;
  const joiningDate= req.body.joiningDate;
  const birthDay= req.body.birthDay;



  await adminService.createWorker(userId, firstName,sureName,phone,salary,rank,branchId,password,joiningDate,birthDay)
  req.session.userId=userId
  req.session.save()
    
  res.redirect('/homePageAdmin/admin')
  
     
  }

module.exports = {
  logIn,
  logInForm,
  registerCust,
  registerAdmin,
  registerFormCust,
  registerFormAdmin,
  logOut,
  isLoggedIn,
  error
}
