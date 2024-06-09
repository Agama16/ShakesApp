const Cart = require("../Model/cart");
const Customer = require("../Model/Customer");
const Product = require("../Model/product");

const createCart = async (userId) => {
    const cart = new Cart({
        price: 0,
        itemId: [],
        custId: userId
    });
    return await cart.save();
};

const deleteAllCart = async () => {
    await Cart.deleteMany({});
};

const getCart = async (filter) => {
    return await Cart.find(filter);
};

const updateCartItem = async (userId, productId) => {
    const cust = await Customer.findOne({ userId: userId });
    if (!cust) {
        return null;
    }
    const cart = await Cart.findOne({ custId: userId });
    const product = await Product.findOne({ id: productId });
    const current = product.numAdd;
    product.numAdd = current + 1;
    await product.save();
    cart.itemId.push(productId);
    cart.price += product.price;
    await cart.save();
    return cart;
};

const getCartById = async (userId) => {
    const cart = await Cart.findOne({ custId: userId });
    return cart;
};

const getCartItemsById = async (userId) => {
    const cart = await Cart.findOne({ custId: userId });
    return cart ? cart.itemId : [];
};

const deleteAllItemsCart = async (userId) => {
    const cart = await Cart.findOne({ custId: userId });
    if (cart) {
        cart.itemId = [];
        cart.price = 0;
        await cart.save();
    }
};

const deleteItemOne = async (userId, productId) => {
    const cart = await Cart.findOne({ custId: userId });
    const product = await Product.findOne({ id: productId });
    if (cart) {
        const index = cart.itemId.findIndex(element => element == productId);
        if (index > -1) {
            cart.itemId.splice(index, 1);
            cart.price -= product.price;
        }
        await cart.save();
    }
};

const getPriceById = async (userId) => {
    const cart = await Cart.findOne({ custId: userId });
    return cart ? cart.price : 0;
};

module.exports = {
    deleteAllCart,
    createCart,
    getCart,
    updateCartItem,
    getCartById,
    getCartItemsById,
    deleteAllItemsCart,
    deleteItemOne,
    getPriceById
};
