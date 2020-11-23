const searchModel = require('../models/search');
const form = require('../helper/form');

module.exports = {
    searchProduct: (req, res) => {
        const { q } = req.query
        const keyword = '%' + q + '%'
        
        searchModel.searchProduct(keyword)
            .then((data) => {
                form.success(res, data)
                 // res.json(data);
            })
            .catch((err) => {
                form.error(res, err)
                // res.json(err);
            });
    },
    sortProductByName: (_, res) => {
        searchModel.sortProductByName()
            .then((data) => {
                form.success(res, data)
            })
            .catch((err) => {
                form.error(res, err)
            })
    },
    sortProductByUpdate: (_, res) => {
        searchModel.sortProductByUpdate()
            .then((data) => {
                form.success(res, data)
            })
            .catch((err) => {
                form.error(res, err)
            })
    },
    sortProductByPrice: (_, res) => {
        searchModel.sortProductByPrice()
            .then((data) => {
                form.success(res, data)
            })
            .catch((err) => {
                form.error(res, err)
            })
    },
};