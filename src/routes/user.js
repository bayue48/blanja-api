const express = require("express");
const userController = require("../controllers/user");
const uploadImg = require("../middlewares/file");
const verif = require("../middlewares/verifyAccess");
const userRouter = express.Router();

userRouter.post("/addReview", userController.addReview);
userRouter.get("/getReview/:productId", userController.getReview);
userRouter.get("/:id", userController.getUserById);
userRouter.patch("/:id", userController.updateUser);
userRouter.patch("/img/:id", uploadImg.singleUpload, userController.updateUser);
userRouter.patch("/pw/new", verif.isLogin, userController.updatePass);

module.exports = userRouter;
