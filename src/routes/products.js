const express = require('express');

const form = require('../helper/form');
const db = require('../config/mySQL');

const productsRouter = express.Router();
const productsController = require('../controllers/products');
// const verifyToken = require('../middlewares/verifyToken')
const verifyAccess = require('../middlewares/verifyAccess')
const multiUpload = require('../middlewares/upload')

// localhost:8000/products
// productsRouter.get('/', productsController.allProducts);
productsRouter.get('/sort', productsController.sortProduct);
productsRouter.post('/', multiUpload, productsController.postNewProduct);
productsRouter.get('/:id', productsController.getProductById);
productsRouter.patch('/:id', multiUpload, productsController.updateProduct);
productsRouter.delete('/:id', productsController.deleteProduct);
// //getColor
productsRouter.get("/getColor", productsController.getColor)
productsRouter.get("/getSize", productsController.getSize)
productsRouter.get("/get_size/:id", productsController.getSizeId)
productsRouter.get("/get_color/:id", productsController.getColorId)

productsRouter.get("/user/:user_id", productsController.getByUser)

productsRouter.patch('/img/:id', multiUpload, productsController.updateProduct)

productsRouter.get("/", (req, res) => {
    const getAllProducts = new Promise((resolve, reject) => {
      const queryString =
        "SELECT * FROM products";
      db.query(queryString, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
    getAllProducts
      .then((data) => {
        // res.json(data);
        form.success(res, data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

module.exports = productsRouter;