const express = require('express');
const mainRouter = express.Router();

const welcomeRouter = require('./welcome');
const productsRouter = require('./products');
const searchRouter = require('./search');
const historyRouter = require('./history');


mainRouter.use('/api/v2/', welcomeRouter); // localhost:8000
mainRouter.use('/api/v2/products', productsRouter); // localhost:8000/products
mainRouter.use('/api/v2/search', searchRouter); // localhost:8000/search
mainRouter.use('/api/v2/history', historyRouter); // localhost:8000/history

module.exports = mainRouter;