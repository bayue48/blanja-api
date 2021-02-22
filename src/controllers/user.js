const userModel = require("./../models/user");
const form = require("../helper/form.helper");

module.exports = {
  addReview: (req, res) => {
    const { body } = req;
    userModel
      .addReview(body)
      .then((result) => {
        res.status(result.status).json(result);
      })
      .catch((error) => {
        res.status(error.status).json(error);
      });
  },

  getReview: (req, res) => {
    const { productId } = req.params;
    console.log(productId);
    userModel
      .getReview(productId)
      .then((result) => {
        res.status(result.status).json(result);
      })
      .catch((error) => {
        res.status(error.status).json(error);
      });
  },

  getUserById: (req, res) => {
    const { id } = req.params;
    userModel
      .getUserById(id)
      .then((data) => {
        if (data.length) {
          form.success(res, "Success", data, 200);
        } else {
          form.error(res, "Data not Found", "err", 404);
        }
      })
      .catch((err) => {
        form.error(res, "Error Occured", err, 400);
      });
  },

  updateUser: (req, res) => {
    const { id } = req.params;
    const { body } = req;

    // const filePath = process.env.LOCAL + "/images/" + req.file.filename;

    const updateBody = {
      ...body,
      //   user_img: filePath,
      updated: new Date(Date.now()),
    };
    userModel
      .updateUser(updateBody, id)
      .then((data) => {
        // if (req.file == undefined) {
        //   form.error(res, "No Images Selected", "err", 400);
        // } else {
        form.success(
          res,
          "Data successfully updated",
          { id: data.updateId, ...updateBody },
          200
        );
      })
      .catch((err) => {
        form.error(res, "Encountered Error", err, 400);
      });
  },

  updatePass: (req, res) => {
    const { email } = req.decodedToken;
    const { body } = req;
    userModel
      .updatePass(body, email)
      .then((data) => {
        form.success(res, "Success Change Password", data, 200);
      })
      .catch((err) => {
        form.error(res, "Encountered Error", err, 400);
      });
  },
};
