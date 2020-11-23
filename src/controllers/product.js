const productModel = require('../models/product');
const form = require('../helper/form');

module.exports = {
    getProductById: (req, res) => {
        const { id } = req.params;

        productModel.getProductById(id)
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

        productModel.updateProduct(updateBody, id)
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
        productModel.deleteProduct(id)
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