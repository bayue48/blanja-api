const db = require("../config/mySQL");

module.exports = {
  searchBy: (addQuery, urlQuery, total_result, page, offset, limit) => {
    return new Promise((resolve, reject) => {
      let queryStr =
        `SELECT p.id, p.product_name, p.product_brand, p.product_rating, 
        p.product_desc, c.category_name, p.product_price, pc.color_name, 
        s.sizes_name, p.product_qty, p.product_img, p.product_condition, 
        p.created_at, p.updated_at FROM products p 
        JOIN categories c ON p.product_category = c.id 
        JOIN colors pc ON p.product_color = pc.id 
        JOIN sizes s ON p.product_size = s.id ` +
        addQuery +
        `LIMIT ${limit} OFFSET ${offset}`;
      // queryStr += keyword
      db.query(queryStr, (err, data) => {
        if (!err) {
          if (data.length) {
            newData = {
              products: data,
              pageInfo: {
                result: total_result,
                totalPage:
                  total_result % limit === 0
                    ? total_result / limit
                    : Math.floor(total_result / limit) + 1,
                currentPage: page || 1,
                previousPage:
                  page === 1
                    ? null
                    : `/search?${urlQuery}page=${page - 1}&limit=${limit}`,
                nextpage:
                  offset + limit <= total_result //dia sudah pada result2 terakhir
                    ? null
                    : `/search?${urlQuery}page=${page + 1}&limit=${limit}`,
              },
            };
            resolve(newData);
          } else {
            reject({
              status: 404,
              msg: "data tidak ditemukan",
            });
          }
        } else {
          reject({
            status: 500,
            msg: err,
          });
        }
      });
    });
  },
  totalResult: (addQuery) => {
    return new Promise((resolve, reject) => {
      let queryStr =
        `SELECT count(p.id) as total_result
                FROM products p
                JOIN categories c ON p.product_category = c.id 
                JOIN colors pc ON p.product_color = pc.id 
                JOIN sizes s ON p.product_size = s.id ` + addQuery;
      db.query(queryStr, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
};
