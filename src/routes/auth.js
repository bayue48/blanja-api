const authRouter = require('express').Router();

const authController = require('../controllers/auth');
const verifyUser = require('../middlewares/verifyUser')

authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);
authRouter.post('/logout', verifyUser.isLogin, authController.logout);

module.exports = authRouter;
