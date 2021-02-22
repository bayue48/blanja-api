const db = require('../config/mySQL')

module.exports = {
    addReview: (body) =>{
        return new Promise ((resolve, reject) =>{
            const queryStr = `INSERT INTO review SET ?`
            db.query(queryStr, body, (err, data) =>{
                if(!err){
                    resolve({
                        status:200,
                        message:`Berhasil menambahkan review`
                    })
                }else{
                    reject({
                        status:500,
                        message:err
                    })
                }
            })
        })
    },

    getReview: (productId) =>{
        return new Promise ((resolve, reject) =>{
            const queryStr = `SELECT r.id, u.name, r.rating, r.review, r.created_at FROM review r JOIN users u ON r.user_id = u.id JOIN products p ON r.product_id = p.id WHERE product_id = ?`
            db.query(queryStr, productId, (err, data) =>{
                if(!err){
                    if(data.length > 0){
                        resolve({
                            status:200,
                            data:data
                        })
                    }else{
                        resolve({
                            status:404,
                            data:`Belum ada review`
                        })
                    }
                }else{
                    reject({
                        status:500,
                        message:err
                    })
                }
            })
        })
    },

    getUserById: (req) => {
    return new Promise((resolve, reject) => {
      const qs =
        "SELECT * FROM users WHERE id = ?";
      db.query(qs, req, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },

  updateUser: (id, updateBody) => {
    return new Promise((resolve, reject) => {
      const qs = "UPDATE users SET ? WHERE id = ?";
      db.query(qs, [id, updateBody], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },

  updatePass: (body, email) => {
    return new Promise((resolve, reject) => {
      const { oldpass, newpass } = body;
      const queryStr = `SELECT password FROM users WHERE email = ?`;
      db.query(queryStr, email, (err, data) => {
        if (!err) {
          if (data.length > 0) {
            bcrypt.compare(oldpass, data[0].password, (error, result) => {
              if (error) {
                reject(error);
              }
              if (!result) {
                reject("Wrong Password");
              } else {
                const saltRounds = Math.floor(Math.random() * 10) + 1;
                bcrypt.hash(
                  newpass,
                  saltRounds,
                  (errorHash, hashedPassword) => {
                    if (errorHash) {
                      reject(errorHash);
                    } else {
                      const updatePassword = `UPDATE users SET password = ? WHERE email = ?`;
                      db.query(
                        updatePassword,
                        [hashedPassword, email],
                        (errorUpdate) => {
                          if (!errorUpdate) {
                            resolve("Success");
                          } else {
                            reject(errorUpdate);
                          }
                        }
                      );
                    }
                  }
                );
              }
            });
          } else {
            reject("User Not Found");
          }
        } else {
          reject(err);
        }
      });
    });
  },
}