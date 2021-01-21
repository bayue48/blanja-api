const db = require('../config/mySQL');

module.exports = {
    allProducts: (id) => {
        return new Promise((resolve, reject) => {
            const queryString = `SELECT * FROM products`
            db.query(queryString, id, (err, data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        })
    },

    sortProduct: (addQuery, urlQuery, total_result, page, offset, limit) => {
        return new Promise((resolve, reject) => {
            let queryStr = `SELECT p.id, p.product_name, p.product_brand, p.product_rating, 
            p.product_desc, c.category_name, p.product_price, pc.color_name, 
            s.sizes_name, p.product_qty, p.product_img, p.product_condition, 
            p.created_at, p.updated_at FROM products p 
            JOIN categories c ON p.product_category = c.id 
            JOIN colors pc ON p.product_color = pc.id 
            JOIN sizes s ON p.product_size = s.id `
                + addQuery +
                `LIMIT ${limit} OFFSET ${offset}`
            console.log(queryStr)
            db.query(queryStr, (err, data) => {
                if (!err) {
                    if (data.length) {
                        newData = {
                            products: data,
                            pageInfo: {
                                result: total_result,
                                totalPage: total_result % limit === 0 ? total_result / limit : Math.floor(total_result / limit) + 1,
                                currentPage: page || 1,
                                previousPage:
                                    page === 1 ? null : `/products/sort/?${urlQuery}page=${page - 1}&limit=${limit}`,
                                nextpage: offset + limit >= total_result //dia sudah pada result2 terakhir
                                    ? null
                                    : `/products/sort/?${urlQuery}page=${page + 1}&limit=${limit}`
                            }
                        }
                        resolve(newData)
                    } else {
                        reject({
                            status: 404,
                            msg: `Not Found`
                        })
                    }
                } else {
                    reject(err)
                }
            })
        })
    },
    countResult: (addQuery) => {
        return new Promise((resolve, reject) => {
            let queryStr = `SELECT count(p.id) as total_result
            FROM products p
            JOIN categories c ON p.product_category = c.id 
            JOIN colors pc ON p.product_color = pc.id 
            JOIN sizes s ON p.product_size = s.id `
                + addQuery;
            db.query(queryStr, (err, data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            })

        })
    },
    getSize: () => {
        return new Promise((resolve, reject) => {
            const qs = 'SELECT * FROM sizes'
            db.query(qs, (err, data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        })
    },
    getColor: () => {
        return new Promise((resolve, reject) => {
            const qs = 'SELECT * FROM colors'
            db.query(qs, (err, data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        })
    },

    getSizeId: (id) => {
        return new Promise((resolve, reject) => {
            const queryStr = `SELECT p.id, s.id, s.sizes_name FROM products p
                            JOIN sizes s ON p.product_size = s.id
                            WHERE p.id = ? GROUP BY s.sizes_name`
            db.query(queryStr, id, (err, data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        })
    },
    getColorId: (id) => {
        return new Promise((resolve, reject) => {
            const queryStr = `SELECT p.id, c.id, c.color_name FROM products p
                            JOIN colors c ON p.product_color = c.id
                            WHERE p.id = ? GROUP BY c.color_name`
            db.query(queryStr, id, (err, data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        })
    },

    getByUser:(user_id) => {
        return new Promise((resolve,reject) => {
            let qs = `SELECT p.id, p.product_name, p.product_brand, p.product_rating, 
            p.product_desc, c.category_name, p.product_price, pc.color_name, 
            s.sizes_name, p.product_qty, p.product_img, p.product_condition, 
            p.created_at, p.updated_at FROM products p 
            JOIN categories c ON p.product_category = c.id 
            JOIN colors pc ON p.product_color = pc.id 
            JOIN sizes s ON p.product_size = s.id 
            WHERE p.user_id = ? ORDER BY p.created_at DESC`
            db.query(qs, user_id, (err,data) => {
                if(!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            })

        })
    },

    postNewProduct: (insertBody) => {
        return new Promise((resolve, reject) => {
            const qs = 'INSERT INTO products SET ?';
            db.query(qs, insertBody, (err, data) => {
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

    updateProduct: (updateBody, id) => {
        return new Promise((resolve, reject) => {
            const qs = 'UPDATE products SET ? WHERE id = ?';
            db.query(qs, [updateBody, id], (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            });
        });
    },

    deleteProduct: (id) => {
        return new Promise((resolve, reject) => {
            const qs = 'DELETE FROM products WHERE id = ?';
            db.query(qs, id, (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            });
        });
    },
};