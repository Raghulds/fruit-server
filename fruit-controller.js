const FruitService = require("./fruit-service");

exports.getFruit = async (req, res) => {
    try {
        // get fruit name from request parameters
        let { fruit } = req.params;

        let fruits = await FruitService.getFruit(fruit);
        res.status(200).send(fruits);
    } catch (error) {
        console.log(error);

        res.status(500).send({
            error: error.message
        });
    }
}

exports.getAllFruits = async (req, res) => {
    try {
        let fruits = await FruitService.getAllFruits();
        res.status(200).send(fruits);
    } catch (error) {
        res.status(500).send({
            error: error.message
        });
    }
}