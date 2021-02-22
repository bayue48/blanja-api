const db = require("../config/mySQL");

module.exports = {
  histories: (id) => {
    return new Promise((resolve, reject) => {
      const queryString = "SELECT i.id, i.invoice_id, i.qty, i.price, i.payment, s.status_name, i.created, i.updated FROM invoice i JOIN order_status s ON i.o_status = s.id WHERE i.user_id = ? ORDER BY i.updated DESC";
      // const queryString =
      //   "SELECT i.user_id, i.invoice_id AS 'Invoice Number', p.product_name AS 'Product Name', p.product_price AS 'Price', i.qty AS 'Quantity', (p.product_price * i.qty) AS 'Total' FROM invoice AS i, items AS p WHERE i.user_id = ?";
      db.query(queryString, id, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  postNewHistory: (insertBody) => {
    return new Promise((resolve, reject) => {
      const queryString = "INSERT INTO invoice SET ?";
      db.query(queryString, insertBody, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
};
