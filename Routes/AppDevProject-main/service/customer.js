const Customer= require("../Model/Customer");
const Cart=require("../Model/cart")
const ServiceCart= require("../service/cart")

const createCust= async (firstName, lastName, adress, userId, password,birthDay,gmail) =>{
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

    await ServiceCart.createCart(userId)

    return await customer.save();

}

const deleteAllCust= async() =>
{
    await Customer.deleteMany({});
}

const getCust= async(filter)=>
{
    return await Customer.find(filter);
}

const updateOrderHistory= async(userId, productId)=>
{
    const cust = await Customer.findOne({ userId:userId });
    if(!cust)
    {
        return null;
    }
    cust.orderHistoryId.push(productId)
    await cust.save();
    return cust
}


async function getCustById(userId) {
    const cust = await Customer.findOne({ userId:userId });
    if(cust!=null)
    {
        return cust
    }
}

async function getCustHistoryById(userId) {
    const cust = await Customer.findOne({ userId:userId });
    if(cust!=null)
    {
        return cust.orderHistoryId
    }
} 

async function deleteAllHistory(userId)
{
    const cust = await Customer.findOne({ userId:userId });
    if(cust!=null)
    {
        cust.orderHistoryId=[]
        cust.save()
        // return cust.orderHistoryId
    }
}

async function deleteHistoryOne(userId, productId)

{
    const cust = await Customer.findOne({ userId:userId });
    if(cust!=null)
    {
        const index= cust.orderHistoryId.findIndex(element=> element==productId)
        if(index>-1)
        {
            cust.orderHistoryId.splice(index,1)
        }
        await cust.save();
    }
}

const updateFavProducts= async(userId, productId)=>
{
    const cust = await Customer.findOne({ userId:userId });
    if(!cust)
    {
        return null;
    }
    cust.favProductsId.push(productId)
    await cust.save();
    return cust
}


async function getCustFavProductsById(userId) {
    const cust = await Customer.findOne({ userId:userId });
    if(cust!=null)
    {
        return cust.favProductsId
    }
} 

async function deleteAllFav(userId)
{
    const cust = await Customer.findOne({ userId:userId });
    if(cust!=null)
    {
        cust.favProductsId=[]
        cust.save()
    }
}

async function deleteFavOne(userId, productId)

{
    const cust = await Customer.findOne({ userId:userId });
    if(cust!=null)
    {
        const index= cust.favProductsId.findIndex(element=> element==productId)
        if(index>-1)
        {
            cust.favProductsId.splice(index,1)
        }
        await cust.save();
    }
}

module.exports= {
    deleteAllCust,
    createCust,
    getCust,
    getCustById,
    updateOrderHistory,
    getCustHistoryById,
    deleteAllHistory,
    deleteHistoryOne,
    updateFavProducts,
    getCustFavProductsById,
    deleteAllFav,
    deleteFavOne

}





