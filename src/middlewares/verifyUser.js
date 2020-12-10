const jwt = require('jsonwebtoken');
const form = require('../helper/form');

module.exports = {
    isRegistered:(req, res, next) => {
        const { username } = req.body
        return new Promise ((resolve, reject) => {
            const queryStr = `SELECT username FROM users WHERE username = ?`
            db.query(queryStr, username, (err, data) => {
                if(!err){
                    if(!data[0]){
                        resolve({
                            msg: `success`
                        })
                    }else{
                        reject({
                            msg: `Username already exist!`
                        })
                    }
                }else{
                    reject({
                        msg: `SQLquery ERROR!`
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
            return new Promise((resolve, reject) => {
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
                            msg: `check Token ERROR!`
                        })
                    }
                })
            }).then((result) => {
                //cek decodedToken apakah cocok
                try {
                    decodedToken = jsonwebtoken.verify(result, process.env.SECRET_KEY)
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
}