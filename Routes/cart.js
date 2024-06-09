const express = require('express');
const router = express.Router();
const serviceCart = require("../service/cart");

// Show cart
router.get('/', async (req, res) => {
    const cust = req.session.userId;
    const items = await serviceCart.getCartItemsById(cust);
    res.render("../View/cart/get", { items });
});

// Add to cart
router.get('/addToCart/:id', async (req, res) => {
    const id = req.params.id;
    const cust = req.session.userId;
    await serviceCart.updateCartItem(cust, id);
    res.redirect("/cart/");
});

// Delete all cart items
router.get('/deleteAllCart', async (req, res) => {
    const cust = req.session.userId;
    await serviceCart.deleteAllItemsCart(cust);
    res.redirect("/menu/");
});

// Delete one item from cart
router.get('/deleteOneItem/:id', async (req, res) => {
    const id = req.params.id;
    const cust = req.session.userId;
    await serviceCart.deleteItemOne(cust, id);
    res.redirect("/cart/");
});

// Buy route to show total price
router.get('/buy', async (req, res) => {
    try {
        const userId = req.session.userId;
        const total = await serviceCart.getPriceById(userId); // Ensure this function returns a promise
        await serviceCart.deleteAllItemsCart(userId);
        res.render('totalPrice', { total }); // Pass the resolved total value to the template
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching total price.');
    }
});

module.exports = router;
