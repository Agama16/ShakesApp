const Cart=require("../Model/cart");
const Customer=require("../Model/Customer");
const Product = require("../Model/product");

const createCart= async(userId)=>
{
    const cart=new Cart({
        price:0,
        itemId:[],
        custId:userId
    })
    
    return await cart.save();

}

const deleteAllCart= async() =>
{
    await Cart.deleteMany({});
    //await GiftCard.deleteMany({});
}

const getCart= async(filter)=>
{
    return await Cart.find(filter);
}

const updateCartItem= async(userId, productId)=>
{
    const cust = await Customer.findOne({ userId:userId });
    if(!cust)
    {
        return null;
    }
    const cart= await Cart.findOne({custId:userId})
    const product=await Product.findOne({id:productId})
    cart.itemId.push(productId)
    const temp=cart.price
    cart.price= temp+product.price

    await cart.save()
    return cart
}

async function getCartById(userId) {
    const cart = await Cart.findOne({ custId:userId });
    if(cart!=null)
    {
        return cart
    }
}

async function getCartItemsById(userId) {
    const cart = await Cart.findOne({ custId:userId });
    if(cart!=null)
    {
        return cart.itemId
    }
} 

async function deleteAllItemsCart(userId)
{
    const cart = await Cart.findOne({ custId:userId });
    if(cart!=null)
    {
        cart.itemId=[]
        cart.price=0
        cart.save()
    }
}


async function deleteItemOne(userId, productId)

{
    //const cust = await Customer.findOne({ userId:userId });
    const cart= await Cart.findOne({custId:userId})
    const product=await Product.findOne({id:productId})
    if(cart!=null)
    {
        const index= cart.itemId.findIndex(element=> element==productId)
        if(index>-1)
        {
            //cust.orderHistoryId.splice(index,1)
            cart.itemId.splice(index,1)
            cart.price= cart.price-product.price

        }
        await cart.save();
    }
}

async function getPriceById(userId) {
    const cart = await Cart.findOne({ custId:userId });
    if(cart!=null)
    {
        return cart.price
    }
} 

module.exports= {
    deleteAllCart,
    createCart,
    getCart,
    updateCartItem,
    getCartById,
    getCartItemsById,
    deleteAllItemsCart,
    deleteItemOne,
    getPriceById
}
