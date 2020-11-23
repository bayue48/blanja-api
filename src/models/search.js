const db = require('../config/mySQL');

module.exports = {
    searchProduct: (keyword) => {
        return new Promise((resolve, reject) => {
            const qs =
                'SELECT p.id, p.product_name, p.product_brand, p.product_rating, p.product_desc, c.category_name, p.product_price, pc.color_name, s.sizes_name, p.product_qty, p.product_img, p.product_condition, p.created_at, p.updated_at FROM products p JOIN categories c ON p.product_category = c.id JOIN colors pc ON p.product_color = pc.id JOIN sizes s ON p.product_size = s.id WHERE p.product_name LIKE ?';
            db.query(qs, keyword, (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
             });
        });
    },
    sortProductByName: () => {
        return new Promise((resolve, reject) => {
            const qs = 
                'SELECT p.id, p.product_name, p.product_brand, p.product_rating, p.product_desc, c.category_name, p.product_price, pc.color_name, s.sizes_name, p.product_qty, p.product_img, p.product_condition, p.created_at, p.updated_at FROM products p JOIN categories c ON p.product_category = c.id JOIN colors pc ON p.product_color = pc.id JOIN sizes s ON p.product_size = s.id ORDER BY p.product_name ASC'
            db.query(qs, (err, data) => {
                if(!err) {
                    resolve(data);
                } else {
                    reject(err)
                }
            });
        });
    },
    sortProductByUpdate: () => {
        return new Promise((resolve, reject) => {
            const qs = 
                'SELECT p.id, p.product_name, p.product_brand, p.product_rating, p.product_desc, c.category_name, p.product_price, pc.color_name, s.sizes_name, p.product_qty, p.product_img, p.product_condition, p.created_at, p.updated_at FROM products p JOIN categories c ON p.product_category = c.id JOIN colors pc ON p.product_color = pc.id JOIN sizes s ON p.product_size = s.id ORDER BY p.updated_at DESC'
            db.query(qs, (err, data) => {
                if(!err) {
                    resolve(data);
                } else {
                    reject(err)
                }
            });
        });
    },
    sortProductByPrice: () => {
        return new Promise((resolve, reject) => {
            const qs = 
                'SELECT p.id, p.product_name, p.product_brand, p.product_rating, p.product_desc, c.category_name, p.product_price, pc.color_name, s.sizes_name, p.product_qty, p.product_img, p.product_condition, p.created_at, p.updated_at FROM products p JOIN categories c ON p.product_category = c.id JOIN colors pc ON p.product_color = pc.id JOIN sizes s ON p.product_size = s.id ORDER BY p.product_name ASC'
            db.query(qs, (err, data) => {
                if(!err) {
                    resolve(data);
                } else {
                    reject(err)
                }
            });
        });
    },
};