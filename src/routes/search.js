const express = require('express');

const searchRouter = express.Router();
const searchController = require('../controllers/search');
// req.query

// localhost:8000/search?{query}
searchRouter.get('/', searchController.searchProduct);
searchRouter.get('/name', searchController.sortProductByName)
searchRouter.get('/update', searchController.sortProductByUpdate)
searchRouter.get('/price', searchController.sortProductByPrice)

module.exports = searchRouter;