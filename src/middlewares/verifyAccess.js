const jwt = require("jsonwebtoken");
const db = require("../config/mySQL");
const form = require("../helper/form.helper");

module.exports = {
  isRegistered: (req, res, next) => {
    const { email } = req.body;
    return new Promise((resolve, reject) => {
      const qs = "SELECT email FROM users WHERE email = ?";
      db.query(qs, email, (err, data) => {
        if (!err) {
          if (!data[0]) {
            resolve("Success");
          } else {
            reject("Email already in use!");
          }
        } else {
          reject("Empty Field");
        }
      });
    })
      .then(() => {
        next();
      })
      .catch((err) => {
        form.error(res, "Encountered error", err, 400);
      });
  },

  isLogin: (req, res, next) => {
    const bearerToken = req.header("x-access-token");
    if (!bearerToken) {
      form.error(res, "Please Login First", "err", 401);
    } else {
      const token = bearerToken.split(" ")[1];
      return new Promise((resolve, reject) => {
        const qs = "SELECT token FROM blacklist WHERE token = ?";
        db.query(qs, token, (err, data) => {
          if (!err) {
            if (!data[0]) {
              resolve(token);
            } else {
              reject("You Already Logout");
            }
          } else {
            reject("Check Token Error");
          }
        });
      })
        .then((result) => {
          try {
            decodedToken = jwt.verify(result, process.env.SECRET_KEY);
            req.decodedToken = decodedToken;
            next();
          } catch (err) {
            form.error(res, "Invalid Token", err, 401);
          }
        })
        .catch((err) => {
          form.error(res, "Error occurred", err, 401);
        });
    }
  },
    isSeller: (req, res, next) => {
        const { level } = req.decodedToken
        if (level != 2) {
            res.status(401).json({
                msg: `Unauthorized Access`,
                details: `Yout dont have permission to access this page.`
            })
        } else {
            next()
        }
    }
}
