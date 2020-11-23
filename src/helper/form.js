  
module.exports = {
    success: (res, data) => {
        const resObject = {
            status: 'success',
            code: 200,
            data,
            };
            res.json(resObject);
    },
    error: (res, err) => {
        res.status(500).json(err)
    },
}