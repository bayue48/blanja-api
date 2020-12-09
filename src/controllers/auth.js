const authModel = require('../models/auth');
const form = require('../helper/form');

module.exports = {
  register: (req, res) => {
    const { body } = req;
    authModel
      .postNewUser(body)
      .then(() => {
        form.success(res, {
          msg: 'Registration Successfull',
          username: body.username,
        });
      })
      .catch((err) => {
        form.error(res, err);
      });
  },

  login: (req, res) => {
    const { body } = req;
    authModel
      .postLogin(body)
      .then((data) => {
        form.success(res, {
          msg: 'Login Succesfull',
          data
        });
      })
      .catch((err) => {
        form.error(res, err);
      });
  },

  logout: (req, res) => {}
};