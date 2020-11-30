const productsModel = require('../models/products');
const form = require('../helper/form');

module.exports = {
    sortProduct: (req, res) => {
        const { sortBy, orderBy } = req.query;
    
        let addQuery = ``
    
        if (sortBy != null) {
          if (orderBy == `desc`) {
            addQuery += `ORDER BY  ${sortBy} DESC`
          }else{
            addQuery += `ORDER BY ${sortBy} ASC`
          }
        }
    
        productsModel.sortProduct(addQuery)
          .then((data) => {
            form.success(res, data)
          })
          .catch((err) => {
            form.error(res, err)
          })
      },
    postNewProduct: (req, res) => {
        const { body } = req;
        const insertBody = {
            ...body,
            created_at: new Date(Date.now()),
            updated_at: new Date(Date.now()),
        };
        productsModel.postNewProduct(insertBody)
            .then((data) => {
                const resObject = {
                    msg: 'Data succesfully inserted',
                    data: { id: data.insertId, ...insertBody },
                };
                res.json(resObject);
            })
            .catch((err) => {
                form.error(res, err);
            });
    },
    getProductById: (req, res) => {
        const { id } = req.params;

        productsModel.getProductById(id)
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
                form.error(res, err);
            });
    },
    updateProduct: (req, res) => {
        const { id } = req.params;
        const { body } = req;
        const updateBody = { 
            ...body, 
            updated_at: new Date(Date.now()) 
        };

        productsModel.updateProduct(updateBody, id)
            .then((data) => {
                const resObject = {
                    msg: 'Data succesfully updated',
                    data: { id: data.updateId, ...updateBody },
                };
                res.json(resObject);
            })
            .catch((err) => {
                form.error(res, err);
            });
    },
    deleteProduct: (req, res) => {
        const { id } = req.params;
        productsModel.deleteProduct(id)
            .then(data => {
                const resObject = {
                    msg: 'Data succesfully deleted',
                    data: { id: data.updateId }
                }
                res.json(resObject);
            })
            .catch(err => {
                form.error(res, err);
            })
    }
};