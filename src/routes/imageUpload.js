const imageUploadRouter = require('express').Router();
const form = require('../helper/form')

// const singleUpload = require('../middleware/upload');
const multiUpload = require('../middlewares/upload');

imageUploadRouter.post('/', multiUpload, (req, res) => {
    const filePath = req.files.map(({ filename }) => {
        return `/images/${filename}`
    })

    if (req.files == undefined) {
        form.error(res, {
            msg: 'No Images Selected',
        });
    }
    else {
        form.success(res, {
            msg: 'Image Uploaded',
            filePath,
        });
    };
})

module.exports = imageUploadRouter;
