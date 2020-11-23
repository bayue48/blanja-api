const express = require('express');

const productsRouter = express.Router();
const productsController = require('../controllers/products');

// localhost:8000/products
productsRouter.get('/', productsController.getAllProducts);
productsRouter.post('/', productsController.postNewProduct);

module.exports = productsRouter;