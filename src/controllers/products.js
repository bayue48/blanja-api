const productsModel = require('../models/products');
const form = require('../helper/form');

module.exports = {
    sortProduct: (req, res) => {
        const { sortBy, orderBy } = req.query;
        const { query } = req;

        const limit = Number(query.limit) || 5;
        const page = Number(query.page) || 1;
        const offset = (page - 1) * limit || 0;

        let addQuery = ``

        if (sortBy != null) {
            if (orderBy == `desc`) {
                addQuery += `ORDER BY ${sortBy} DESC`
            } else {
                addQuery += `ORDER BY ${sortBy} ASC`
            }
        }
        

        productsModel.sortProduct(addQuery, limit, offset, page)
            .then((data) => {
                if (Math.ceil(data.products / limit) == data.products) {
                    res.status(404).json({
                      msg: "Data Not Found",
                      status: 404,
                    });
                  } else {
                    form.success(res, data);
                  }
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
                form.success(res, {
                    msg: 'Product succesfully added',
                    data: { id: data.insertId, ...insertBody },
                }
                );
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
                    form.success(res, data)
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
                form.success(res, {
                    msg: 'Product succesfully updated',
                    data: { id: data.updateId, ...updateBody },
                }
                );
            })
            .catch((err) => {
                form.error(res, err);
            });
    },

    deleteProduct: (req, res) => {
        const { id } = req.params;
        productsModel.deleteProduct(id)
            .then(data => {
                form.success(res, {
                    msg: 'Product succesfully deleted',
                    data: { id: data.updateId }
                },
                );
            })
            .catch(err => {
                form.error(res, err);
            })
    }
};