const express = require("express");
const router = express.Router();

const logInController=require("../Controller/logIn");


router.get("/registerAdmin", logInController.registerFormAdmin);
router.post("/registerAdmin", logInController.registerAdmin);

router.get("/registerCustomer", logInController.registerFormCust);
router.post("/registerCustomer", logInController.registerCust);

router.get("/logIn", logInController.logInForm);
router.post("/logIn", logInController.logIn);

router.get("/logOut",logInController.logOut);

router.get("/error", logInController.error)

// router.get('/', loginController.isLoggedIn, loginController.foo);

// const express = require('express');
// const router= express.Router();

///////////MY VERSION/////////////
// const controlles=require("../Controller/logIn");

// router.get('/registerAdmin', async(req,res)=>
// {
//     const admin= await controlles.registerFormAdmin({});
//     //todo
//     res.render("../View/logIn/registerAdmin", {admin});

// })

// router.get('/registerCustomer', async(req,res)=>
// {
//     const cust= await controlles.registerFormCust({});
//     //todo
//     res.render("../View/logIn/registerCustomer", {admin});

// })

// router.get('/login', async(req,res)=>
// {
//     const login= await controlles.loginForm({});
//     //todo
//     res.render("../View/logIn/login", {login});

// })


module.exports = router;
