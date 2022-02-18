const CartService = require("./cart-service");

exports.purchase = async (req, res) => {
    try {

        let fruits = await CartService.purchase(req.body);
        console.log(fruits);
        res.status(201).send(fruits);
    } catch (error) {

        if (error.name == 'OutOfStockError' || error.name == 'TypeError') {
            return res.status(400).send({
                error: error.message
            });
        }

        if (error.name == 'SecurityError') {
            return res.status(403).send({
                error: error.message
            });
        }

        res.status(500).send({
            error: error.message
        });
    }
}