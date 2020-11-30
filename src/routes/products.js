const express = require('express');

const productsRouter = express.Router();
const productsController = require('../controllers/products');

// localhost:8000/products
productsRouter.get('/', productsController.sortProduct);
productsRouter.post('/', productsController.postNewProduct);
productsRouter.get('/:id', productsController.getProductById);
productsRouter.patch('/:id', productsController.updateProduct);
productsRouter.delete('/:id', productsController.deleteProduct);

module.exports = productsRouter;