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
        let urlQuery = ``

        if (sortBy != null) {
            if (orderBy == `desc`) {
                addQuery += `ORDER BY ${sortBy} DESC`
                urlQuery = `sortBy=${sortBy}&orderBy=desc&`
            } else {
                addQuery += `ORDER BY ${sortBy} ASC`
                urlQuery = `sortBy=${sortBy}&orderBy=asc&`
            }
        }

        productsModel.sortProduct(addQuery, urlQuery, limit, offset, page)
            .then((data) => {
                if (Math.ceil(data.products / limit) == data.products) {
                    res.status(404).json({
                        msg: 'Data Not Found',
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

    allProducts: (req, res) => {
        const { query } = req;
        const limit = Number(query.limit) || 5;
        const page = Number(query.page) || 1;
        const offset = (page - 1) * limit || 0;

        productsModel.allProducts(limit, offset, page)
            .then((data) => {
                if (Math.ceil(data.products / limit) == data.products) {
                    res.status(404).json({
                        msg: "Page Not Found",
                        status: 404,
                    });
                } else {
                    form.success(res, data)
                }
            }).catch((err) => {
                form.error(res, err)
            })
    },

    postNewProduct: (req, res) => {
        const { body } = req;
        const insertBody = {
            ...body,
            product_img: req.filePath,
            created_at: new Date(Date.now()),
            updated_at: new Date(Date.now()),
        };
        const image = req.filePath.split(',')
        productsModel.postNewProduct(insertBody)
            .then((data) => {
                form.success(res, {
                    msg: 'Product succesfully added',
                    product_img: image,
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
            product_img: req.filePath,
            updated_at: new Date(Date.now())
        };
        const image = req.filePath.split(',')
        productsModel.updateProduct(updateBody, id)
            .then((data) => {
                form.success(res, {
                    msg: 'Product succesfully updated',
                    product_img: image,
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
            .then(() => {
                form.success(res, {
                    msg: 'Product succesfully deleted',
                },
                );
            })
            .catch(err => {
                form.error(res, err);
            })
    }
};