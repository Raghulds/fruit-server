const express = require("express");
const FruitRoutes = require("./fruit-routes");
const CartRoutes = require('./cart-routes');
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 1234;

const apiRoutes = express.Router();

// Add headers before the routes are defined - CORS 
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    next();
});

// TODO-1: need to npm install and run to start up this fruit server

// setup the fruit routes
FruitRoutes.setup(apiRoutes);

// TODO-4: need to setup route for cart purchase
CartRoutes.setup(apiRoutes);

app.use(bodyParser.json());

// all REST api calls should be under api
app.use("/api", apiRoutes);

// basic get route for the system
app.get("/", (req, res) => {
    res.send("Welcome to fruit server 1.0.0");
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Custom Error handler for fruit server
app.use(function (err, req, res, next) {
    // TODO-5: handle common errors

    console.log("In error middleware!")

    if (err.status == 404) {
        res.status(err.status).send("Route not found!")
    }

    if (err.name == 'OutOfStockerr') {
        res.status(400).send({
            error
        });
    }

    if (error.name == 'SecurityError') {
        res.status(403).send({
            error
        });
    }

    res.status(500).send('Error!')
});

// listening on the nodemon port configured in @see package.json
app.listen(port, (req, res) => {
    console.log(
        `fruit server started from nodemon and listening at http://localhost:${port}`
    );
});
