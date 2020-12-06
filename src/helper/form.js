  
module.exports = {
    success: (res, data) => {
        const resObject = {
            success: true,
            code: 200,
            data,
            };
            res.json(resObject);
    },
    error: (res, err) => {
        const resObject = {
            success: false,
            code: 500,
            err,
            };
            res.json(resObject);
    },
}