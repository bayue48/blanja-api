const db = require('../config/mySQL');

module.exports = {
    searchCategory: (keyword) => {
        return new Promise((resolve, reject) => {
            const qs =
                'SELECT p.id, p.product_name, p.product_brand, p.product_rating, p.product_desc, c.category_name, p.product_price, pc.color_name, s.sizes_name, p.product_qty, p.product_img, p.product_condition, p.created_at, p.updated_at FROM products p JOIN categories c ON p.product_category = c.id JOIN colors pc ON p.product_color = pc.id JOIN sizes s ON p.product_size = s.id WHERE c.category_name LIKE ?';
            db.query(qs, keyword, (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
             });
        });
    },
};