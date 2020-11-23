const express = require('express');

const categoryRouter = express.Router();
const categoryController = require('../controllers/search');
// req.query

// localhost:8000/category?{query}
categoryRouter.get('/', categoryController.searchCategory);

module.exports = categoryRouter;