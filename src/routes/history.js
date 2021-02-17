const express = require('express')

const historyRouter = express.Router();
const historyController = require('../controllers/history')
// const verifyToken = require('../middlewares/verifyToken')

historyRouter.get('/:id', historyController.histories)
historyRouter.post('/', historyController.postNewHistory)

module.exports = historyRouter;