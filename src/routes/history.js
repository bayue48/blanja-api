const express = require('express')

const historyRouter = express.Router();
const historyController = require('../controllers/history')
const verifyToken = require('../middlewares/verifyToken')

historyRouter.get('/', verifyToken, historyController.getHistory)
historyRouter.post('/', verifyToken, historyController.postHistory)

module.exports = historyRouter;