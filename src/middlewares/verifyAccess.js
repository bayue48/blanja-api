const jwt = require('jsonwebtoken');
const db = require('../config/mySQL')
const form = require('../helper/form');

module.exports = {
    isRegistered: (req, res, next) => {
        const { email } = req.body
        const checkAvailable = new Promise((resolve, reject) => {
            const queryStr = `SELECT email FROM users WHERE email = ?`
            db.query(queryStr, email, (err, data) => {
                if (!err) {
                    if (!data[0]) {
                        resolve({
                            msg: `Success`
                        })
                    } else {
                        reject({
                            msg: `email already in use!`
                        })
                    }
                } else {
                    reject({
                        msg: `Error`
                    })
                }
            })
        }).then((result) => {
            next()
        }).catch((error) => {
            form.error(res, error)
        })
    },
    isLogin: (req, res, next) => {
        const bearerToken = req.header('x-access-token');
        //jika tidak ada header x-access-token
        if (!bearerToken) {
            res.json({
                msg: `Please login first`,
                status: 401 //unauthorized access
            })
        } else {
            const token = bearerToken.split(' ')[1]
            const checkBlacklist = new Promise((resolve, reject) => {
                const queryStr = `SELECT token FROM blacklist WHERE token = ?`
                db.query(queryStr, token, (err, data) => {
                    if (!err) {
                        if (!data[0]) {
                            resolve(token)
                        } else {
                            reject({
                                msg: `Invalid token, either you not login yet or already logout`
                            })
                        }
                    } else {
                        reject({
                            msg: `Check token error`
                        })
                    }
                })
            }).then((result) => {
                //cek decodedToken apakah cocok
                try {
                    decodedToken = jwt.verify(result, process.env.SECRET_KEY)
                    //asign decodedToken to req
                    req.decodedToken = decodedToken

                    next() //meneruskan ke proses selanjutnya
                } catch (err) {
                    res.json({
                        msg: `Token invalid, wrong SECRET_KEY`
                    })
                }
            }).catch((error) => {
                res.json(error)
            })
        }
    },
    isSeller: (req, res, next) => {
        const { level } = req.decodedToken
        if (level != 2) {
            res.status(401).jason({
                msg: `Unauthorized Access`,
                details: `Yout dont have permission to access this page.`
            })
        } else {
            next()
        }
    }
}
