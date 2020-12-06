const express = require('express');

const welcomeRouter = express.Router();

// handler for endpoint /
welcomeRouter.get('/', (_, res) => {
  res.send('API Blanja Products');
});

module.exports = welcomeRouter;