const searchModel = require('../models/category');
const form = require('../helper/form');

module.exports = {
    searchCategory: (req, res) => {
        const { q } = req.query
        const keyword = '%' + q + '%'
        
        searchModel.searchCategory(keyword)
            .then((data) => {
                form.success(res, data)
                 // res.json(data);
            })
            .catch((err) => {
                form.error(res, err)
                // res.json(err);
            });
    },
};