const express = require('express');

const productsRouter = express.Router();
const productsController = require('../controllers/products');
// const verifyToken = require('../middlewares/verifyToken')
const verifyAccess = require('../middlewares/verifyAccess')
const multiUpload = require('../middlewares/upload')

// localhost:8000/products
productsRouter.get('/', productsController.allProducts);
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

productsRouter.get("/getByUser/:user_id", productsController.getByUser)

productsRouter.get('/all_prod',(req, res) => {
    return new Promise ((resolve, reject) => {
        const queryStr = `SELECT * FROM products`
        db.query(queryStr, (err, data) => {
            if(!err){
                resolve(data)
            }else{
                reject(err)
            }
        })
    }).then((result) => {
        res.json(result)
    }).catch((error) => {
        console.log(error)
    })
})

productsRouter.get('/all_ctg', (req,res) => {
    const get_Cat = new Promise (( resolve, reject ) => {
        const queryStr = 'SELECT * FROM category'
        db.query(queryStr, (err, data) => {
            if(!err){
                resolve(data)
            }else{
                reject(err)
            }
        })
    }).then((result) => {
        res.json(result)
    }).catch((error) => {
        console.log(error)
    })
})

module.exports = productsRouter;