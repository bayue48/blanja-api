const express = require("express");
const productRouter = express.Router();
const db = require("../configs/mySQL");

// req params

// localhost:8000/product/{params}
productRouter.get("/:id", (req, res) => {
    const { id } = req.params;
    const getProductById = new Promise((resolve, reject) => {
        const qs = 
            ''    
        db.query(qs, id, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
    getProductById
        .then((data) => {
            if (data.length) {
                res.json(data[0]);
            } else {
                res.status(404).json({
                msg: "Data not Found",
                });
            }
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

module.exports = productRouter;