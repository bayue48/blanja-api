const express = require('express');

const productsRouter = express.Router();
const productsController = require('../controllers/products');
const verifyToken = require('../middlewares/verifyToken')
const multiUpload = require('../middlewares/upload')

// localhost:8000/products
productsRouter.get('/', productsController.sortProduct);
productsRouter.post('/', verifyToken, multiUpload, productsController.postNewProduct);
productsRouter.get('/:id', productsController.getProductById);
productsRouter.patch('/:id', verifyToken, multiUpload, productsController.updateProduct);
productsRouter.delete('/:id', verifyToken, productsController.deleteProduct);

module.exports = productsRouter;