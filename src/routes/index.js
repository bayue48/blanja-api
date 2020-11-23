const express = require('express');

const mainRouter = express.Router();

const welcomeRouter = require('./welcome');
const productsRouter = require('./products');
const searchRouter = require('./search');
const searchCategory = require('./category');

mainRouter.use('/', welcomeRouter); // localhost:8000
mainRouter.use('/products', productsRouter); // localhost:8000/products
mainRouter.use('/search', searchRouter); // localhost:8000/search
mainRouter.use('/category', searchCategory); // localhost:8000/category

module.exports = mainRouter;