const express = require('express');

const searchRouter = express.Router();
const searchController = require('../controllers/search');
// req.query

// search?{query}
searchRouter.get('/', searchController.searchBy);

module.exports = searchRouter;