const { request } = require("http");
const Customer = require("../Model/Customer");
const Admin= require("../Model/worker");

async function logIn(userId, password) {
    const cust = await Customer.findOne({ userId:userId, password:password });
    if(cust!=null)
    {

        return cust
    }
    const admin = await Admin.findOne({ userId:userId, password:password });
    return admin != null
}

async function logInType(userId,password)
{
    const cust = await Customer.findOne({ userId:userId, password:password });
    if(cust!=null)
    {
        return "customer"
    }
    const admin = await Admin.findOne({ userId:userId, password:password });
    if(admin!=null)
    {
        return "admin"
    }
}


async function registerCust(firstName, lastName, adress, userId, password,birthDay,gmail) {

    const customer=new Customer({
        firstName: firstName,
        lastName: lastName,
        adress:adress,
        userId:userId,
        password:password,
        birthDay:birthDay,
        gmail:gmail,
        favProductsId:[],
        orderHistoryId:[],
        relatedGiftCards: [],
        points:0,
    })

    await customer.save()        
}


async function registerAdmin(userId, firstname,surename, phone, salary, rank,branchId, password, joiningdste,birthday) {

    const worker=new Admin({
        userId:userId,
        firstName:firstname,
        sureName:surename,
        phone:phone,
        salary:salary,
        rank:rank, 
        branchId:branchId,
        password:password,
        joiningDate: joiningdste,
        birthday:birthday 
        })
    

    await worker.save()        
}


module.exports = { logIn, registerAdmin,registerCust, logInType }