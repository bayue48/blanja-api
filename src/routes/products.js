const express = require('express');
const productsRouter = express.Router();
const db = require('../configs/mySQL');

// localhost:8000/products
// GET

productsRouter.get('/', (_, res) => {
    const getAllProducts = new Promise((resolve, reject) => {
        const qs =
            'SELECT p.id, p.product_name, p.product_brand, p.product_rating, p.product_desc, c.category_name, p.product_price, pc.color_name, s.sizes_name, p.product_qty, p.product_img, p.created_at, p.updated_at FROM products p JOIN categories c ON p.product_category = c.id JOIN colors pc ON p.product_color = pc.id JOIN sizes s ON p.product_size = s.id '
        db.query(qs, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
    getAllProducts
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
});

// localhost:8000/products
// POST

productsRouter.post('/', (req, res) => {
  // mendapat objek request dari client
  // melakukan query ke db
  // mengirim response
    const { body } = req;
    const insertBody = {
        ...body,
        created_at: new Date(Date.now()),
        updated_at: new Date(Date.now()),
        };
    const postNewProduct = new Promise((resolve, reject) => {
        const qs = 'INSERT INTO products SET ?';
        db.query(qs, insertBody, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
    postNewProduct
        .then((data) => {
            const resObject = {
                msg: 'Data berhasil dimasukkan',
                data: { id: data.insertId, ...insertBody },
            };
            res.json(resObject);
        })
        .catch((err) => {
            res.json(err);
        });
});

module.exports = productsRouter;