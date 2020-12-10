const db = require('../config/mySQL');

module.exports = {
    getHistory: () => {
        return new Promise((resolve, reject) => {
            const qs =
                `SELECT th.id AS 'Transaction_ID', th.product AS 'Product_ID', c.category_name as 'Category', pc.color_name as 'Color', s.sizes_name AS 'Size', th.qty AS 'Quantity', th.price AS 'Price', (th.qty * th.price) AS 'Sub_Total', th.created_at AS 'Transaction_Date' FROM transactions_history th JOIN categories c ON th.category = c.id JOIN colors pc ON th.color = pc.id JOIN sizes s ON th.size = s.id ORDER BY th.created_at DESC`;
            db.query(qs, (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
             });
        });
    },
    postHistory: (inserBody, level) => {
        return new Promise((resolve, reject) => {
            const qs =
                'INSERT INTO transactions_history SET ?';
                if (level > 2) {
                    reject({
                        msg: 'Unauthorized Access',
                        status: 401
                    })
                }
            db.query(qs, [inserBody, level], (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
             });
        });
    },
};