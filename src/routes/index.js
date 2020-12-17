const express = require('express');
const mainRouter = express.Router();

const welcomeRouter = require('./welcome');
const productsRouter = require('./products');
const searchRouter = require('./search');
const historyRouter = require('./history');
const authRouter = require('./auth');
const imageUploadRouter = require('./imageUpload');

// const verifyToken = require('../middlewares/verifyToken');
const verifyAccess = require('../middlewares/verifyAccess')

mainRouter.use('/api/v2/', welcomeRouter);
mainRouter.use('/api/v2/products', productsRouter);
mainRouter.use('/api/v2/search', searchRouter);
mainRouter.use('/api/v2/history', verifyAccess.isLogin, historyRouter);
mainRouter.use('/api/v2/auth', authRouter);
mainRouter.use('/api/v2/upload', verifyAccess.isLogin, imageUploadRouter);

module.exports = mainRouter;