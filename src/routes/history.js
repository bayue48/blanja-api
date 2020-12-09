const express = require('express')

const historyRouter = express.Router();
const historyController = require('../controllers/history')

historyRouter.get('/', historyController.getHistory)
historyRouter.post('/', historyController.postHistory)

module.exports = historyRouter;