const express = require('express');
const searchCategory = express.Router();
const db = require('../config/mySQL');

// req params

// localhost:8000/category/{params}
searchCategory.get('/:id', (req, res) => {
    const { id } = req.params;
    const getProductByCategory = new Promise((resolve, reject) => {
        const qs = 
            'SELECT p.id, p.product_name, p.product_brand, p.product_rating, p.product_desc, c.category_name, p.product_price, pc.color_name, s.sizes_name, p.product_qty, p.product_img, p.product_condition, p.created_at, p.updated_at FROM products p JOIN categories c ON p.product_category = c.id JOIN colors pc ON p.product_color = pc.id JOIN sizes s ON p.product_size = s.id WHERE c.category_name = ?'    
        db.query(qs, id, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
    getProductByCategory
        .then((data) => {
            if (data.length) {
                res.json(data[0]);
            } else {
                res.status(404).json({
                msg: 'Data not Found',
                });
            }
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

module.exports = searchCategory;