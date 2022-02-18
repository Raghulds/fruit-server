const express = require("express");
const fruitController = require('./fruit-controller');

class FruitRoutes {

    /**
     * Setups the routes for fruit related REST api calls
     */
    static setup(root) {
        const fruitRouter = express.Router();

        /**
         * TODO-2 - need to expose an api that allows a caller to get a list of all fruits in the system
         *  @requirements use the @FruitService methods to interact with the fruit inventory
         *  @notes remember all methods are @see async on the FruitService
         */
        fruitRouter.get('/fruits', fruitController.getAllFruits)

        /**
         * TODO-3 - need to expose an api that allows a caller to get a specific fruit in the system
         *  @requirements use the @FruitService methods to interact with the fruit inventory
         *  @requirements take consideration when fruit does not exist
         *  @notes remember all methods are @see async on the FruitService
         */
        fruitRouter.get('/fruits/:fruit', fruitController.getFruit)

        root.use(fruitRouter);
    }
}

module.exports = FruitRoutes;