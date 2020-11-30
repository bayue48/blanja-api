const historyModel = require('../models/history');
const form = require('../helper/form');

module.exports = {
    getHistory: (_, res) => {
        historyModel.getHistory()
            .then((data) => {
                form.success(res, data)
                 // res.json(data);
            })
            .catch((err) => {
                form.error(res, err)
                // res.json(err);
            });
    },
    postHistory: (req, res) => {
        const { body } = req
        const insertBody = {
            ...body,
            created_at: new Date(Date.now()),
        };
        historyModel.postHistory(insertBody)
            .then((data) => {
                const resObject = {
                    msg: 'Data succesfully inserted',
                    data: { id: data.insertId, ...insertBody },
                };
                res.json(resObject);
            })
            .catch((err) => {
                form.error(res, err)
                // res.json(err);
            });
    },
};