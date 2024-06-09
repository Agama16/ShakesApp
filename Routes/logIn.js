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



module.exports = router;
