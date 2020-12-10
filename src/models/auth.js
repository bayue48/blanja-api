const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const db = require('../config/mySQL');

module.exports = {
  postNewUser: (body) => {
    // genSalt
    // hash
    // store DB
    return new Promise((resolve, reject) => {
      const saltRounds = 10;
      bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) {
          reject(err);
        }
        bcrypt.hash(body.password, salt, (err, hash) => {
          if (err) {
            reject(err);
          }
          const newBody = { ...body, password: hash };
          const qs = 'INSERT INTO users SET ?';
          db.query(qs, newBody, (err, data) => {
            if (!err) {
              resolve(data);
            } else {
              reject(err);
            }
          });
        });
      });
    });
  },

  postLogin: (body) => {
    // query ke DB => SELECT password WHERE username == username body
    // compare body password dengan password DB
    // jwt => sign, verify
    // sign => get token from payload
    // sent token to client
    return new Promise((resolve, reject) => {
      const { username, password } = body;
      const qs = 'SELECT password, level_id FROM users WHERE username = ?';
      db.query(qs, username, (err, data) => {
        // Handle Error SQL
        if (err) {
          reject({
            msg: 'Error SQL',
            status: 500,
            err,
          });
        }
        // Handle User Not Found
        if (!data[0]) {
          reject({
            msg: 'User Not Found',
            status: 404,
          });
        } else {
          // Compare password from body and DB
          bcrypt.compare(password, data[0].password, (err, result) => {
            if (err) {
              reject({
                msg: 'Hash Error',
                status: 500,
                err,
              });
            }
            // result => true : false
            if (!result) {
              reject({
                msg: 'Wrong Password',
                status: 401,
              });
            } else {
              const payload = {
                username,
                level: data[0].level_id,
              };
              const secret = process.env.SECRET_KEY;
              const token = jwt.sign(payload, secret, { expiresIn: '24h' });
              resolve({ token });
            }
          });
        }
      });
    });
  },

  postLogout: (blacklistToken) => {
    return new Promise((resolve, reject) => {
        const queryStr = 'INSERT INTO blacklist SET ?'
        db.query(queryStr, blacklistToken, (err, data) => {
            if (!err) {
                resolve({
                    msg: `Logout succesful`,
                })
            } else {
                reject({
                    msg: `Logout Failed`
                })
            }
        })
    })
}
}
