const express = require('express');

const productRouter  = express.Router();
const productController = require('../controllers/product')

// req params
// localhost:8000/product/{params}

productRouter.get('/:id', productController.getProductById);
productRouter.put('/:id', productController.updateProduct);
productRouter.delete('/:id', productController.deleteProduct);

module.exports = productRouter;