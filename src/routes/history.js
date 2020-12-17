const express = require('express')

const historyRouter = express.Router();
const historyController = require('../controllers/history')
// const verifyToken = require('../middlewares/verifyToken')

historyRouter.get('/', historyController.getHistory)
historyRouter.post('/', historyController.postHistory)

module.exports = historyRouter;