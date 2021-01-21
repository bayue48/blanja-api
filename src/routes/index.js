const express = require('express');
const mainRouter = express.Router();

const welcomeRouter = require('./welcome');
const productsRouter = require('./products');
const searchRouter = require('./search');
const historyRouter = require('./history');
const authRouter = require('./auth');
const imageUploadRouter = require('./imageUpload');
const addressRouter = require ('./address')
const trxRouter = require ("./trx")
const userRouter = require ('./user')

// const verifyToken = require('../middlewares/verifyToken');
const verifyAccess = require('../middlewares/verifyAccess')

mainRouter.use('/', welcomeRouter);
mainRouter.use('/products', productsRouter);
mainRouter.use('/search', searchRouter);
mainRouter.use('/history', historyRouter);
mainRouter.use('/auth', authRouter);
mainRouter.use('/upload', imageUploadRouter);
mainRouter.use("/address", addressRouter)
mainRouter.use("/user", userRouter)
mainRouter.use("/transactions", trxRouter) //Trx

module.exports = mainRouter;