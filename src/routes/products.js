const express = require('express');

const productsRouter = express.Router();
const productsController = require('../controllers/products');
// const verifyToken = require('../middlewares/verifyToken')
const verifyAccess = require('../middlewares/verifyAccess')
const multiUpload = require('../middlewares/upload')

// localhost:8000/products
productsRouter.get('/', productsController.allProducts);
// productsRouter.get('/sort', productsController.sortProduct);
productsRouter.post('/', verifyAccess.isLogin, verifyAccess.isSeller, multiUpload, productsController.postNewProduct);
productsRouter.get('/:id', productsController.getProductById);
productsRouter.patch('/:id', verifyAccess.isLogin, verifyAccess.isSeller, multiUpload, productsController.updateProduct);
productsRouter.delete('/:id', verifyAccess.isLogin, verifyAccess.isSeller, productsController.deleteProduct);

module.exports = productsRouter;