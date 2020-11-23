const productsModel = require('../models/products');
const form = require('../helper/form');

module.exports = {
    getAllProducts: (_, res) => {
        productsModel.getAllProducts()
            .then((data) => {
                form.success(res, data)
            })
            .catch((err) => {
                form.error(res, err)
            });
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
};