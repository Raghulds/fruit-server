const express = require("express");
const cartController = require('./cart-controller')

class CartRoutes {

    /**
     * Setups the routes for fruit related REST api calls
     */
    static setup(root) {
        const cartRouter = express.Router();

        cartRouter.post('/cart/purchase', cartController.purchase);

        root.use(cartRouter);
    }
}

module.exports = CartRoutes;