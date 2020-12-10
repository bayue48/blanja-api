const db = require('../config/mySQL');

module.exports = {
    sortProduct: (param, param2, limit, offset, page) => {
        return new Promise((resolve, reject) => {
            let qs = `SELECT p.id, p.product_name, p.product_brand, p.product_rating, p.product_desc, c.category_name, p.product_price, pc.color_name, s.sizes_name, p.product_qty, p.product_img, p.product_condition, p.created_at, p.updated_at FROM products p JOIN categories c ON p.product_category = c.id JOIN colors pc ON p.product_color = pc.id JOIN sizes s ON p.product_size = s.id ` + param + ` LIMIT ? OFFSET ?`
            // qs += param
            db.query(qs, [limit, offset], (err, data) => {
                const newResult = {
                    products: data,
                    pageInfo: {
                        currentPage: page,
                        previousPage:
                            page === 1 ? null : `/api/v2/products/sort?${param2}page=${page - 1}&limit=${limit}`,
                        nextPage: page === limit !== data.length &&
                            limit !== data.length ? null : `/api/v2/products/sort?${param2}page=${page + 1}&limit=${limit}`,
                    },
                };
                if (!err) {
                    resolve(newResult);
                } else {
                    reject(err);
                }
            });
        });
    },

    allProducts: (limit, offset, page) => {
        return new Promise((resolve, reject) => {
            let qs = `SELECT p.id, p.product_name, p.product_brand, p.product_rating, p.product_desc, c.category_name, p.product_price, pc.color_name, s.sizes_name, p.product_qty, p.product_img, p.product_condition, p.created_at, p.updated_at FROM products p JOIN categories c ON p.product_category = c.id JOIN colors pc ON p.product_color = pc.id JOIN sizes s ON p.product_size = s.id LIMIT ? OFFSET ?`
            db.query(qs, [limit, offset, page], (err, data) => {
                const newResult = {
                    products: data,
                    pageInfo: {
                        currentPage: page,
                        previousPage:
                            page === 1 ? null : `/api/v2/products?page=${page - 1}&limit=${limit}`,
                        nextPage: page === limit !== data.length &&
                            limit !== data.length ? null : `/api/v2/products?page=${page + 1}&limit=${limit}`,
                    },
                };
                if (!err) {
                    resolve(newResult);
                } else {
                    reject(err);
                }
            });
        });
    },

    postNewProduct: (insertBody, level) => {
        return new Promise((resolve, reject) => {
            const qs = 'INSERT INTO products SET ?';
            if (level > 1) {
                reject({
                    msg: 'Unauthorized Access',
                    status: 401
                })
            }
            db.query(qs, [insertBody, level], (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            });
        });
    },

    getProductById: (id) => {
        return new Promise((resolve, reject) => {
            const qs =
                'SELECT p.id, p.product_name, p.product_brand, p.product_rating, p.product_desc, c.category_name, p.product_price, pc.color_name, s.sizes_name, p.product_qty, p.product_img, p.product_condition, p.created_at, p.updated_at FROM products p JOIN categories c ON p.product_category = c.id JOIN colors pc ON p.product_color = pc.id JOIN sizes s ON p.product_size = s.id WHERE p.id = ?';
            db.query(qs, id, (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            });
        });
    },

    updateProduct: (updateBody, id, level) => {
        return new Promise((resolve, reject) => {
            const qs = 'UPDATE products SET ? WHERE id = ?';
            if (level > 1) {
                reject({
                    msg: "Unauthorized Access",
                    status: 401
                })
            }
            db.query(qs, [updateBody, id, level], (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            });
        });
    },

    deleteProduct: (id, level) => {
        return new Promise((resolve, reject) => {
            const qs = 'DELETE FROM products WHERE id = ?';
            if (level > 1) {
                reject({
                    msg: 'Unauthorized Access',
                    status: 401
                })
            }
            db.query(qs, [id, level], (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            });
        });
    },
};