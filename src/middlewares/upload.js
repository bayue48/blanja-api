const multer = require('multer');
const path = require('path');

const form = require('../helper/form');

const multerStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images');
    },
    filename: function (req, file, cb) {
        const nameFormat = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
        cb(null, nameFormat);
    },
});

const upload = multer({
    storage: multerStorage,
    limits: 5 * 1024 * 1024, // 5 MB
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
});

function checkFileType(file, cb) {
    // allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    //check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true)
    }
    else {
        cb('Images only!');
    }
}

const singleUpload = (req, res, next) => {
    const uploadSingle = upload.single('image');
    uploadSingle(req, res, (err) => {
        if (err) {
            form.error(res, {
                msg: 'Multer Error',
                err,
            });
        } else {
            next();
        }
    });
};

const multiUpload = (req, res, next) => {
    const uploadMulti = upload.array('product_img', 5);
    uploadMulti(req, res, (err) => {
        if (err) {
            form.error(res, {
                msg: 'Multer Error',
                err,
            });
        } else {
            // if (req.files == undefined) {
            //     form.error(res, {
            //         msg: 'No Images Selected',
            //     });
            // }
            // else {
            //     form.success(res, {
            //         msg: 'Image Uploaded',
            //         filePath,
            //     });
            // };
            let filePath = req.files.map((val) =>
                '/images/' + val.filename
            )
            req.filePath = filePath.join(',')
            next();
        }
    });
};

module.exports = multiUpload, singleUpload