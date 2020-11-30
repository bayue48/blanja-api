const express = require('express')

const historyRouter = express.Router();
const historyControllers = require("../controllers/history")

historyRouter.get("/", historyControllers.getHistory)
historyRouter.post("/", historyControllers.postHistory)

module.exports = historyRouter;