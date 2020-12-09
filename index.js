require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
// cors => cross origin resource sharing
const mainRouter = require('./src/routes/index');

const app = express();
// port initializtion
const port = 8000;
// listen port
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});

app.use(express.static('public'));
// allow access from all origin
app.use(cors());
// logger
app.use(logger('dev'));

// parser for x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// extended: false => use qs
// extended: true => use querystring

// parser for raw json
app.use(bodyParser.json())

app.use('/', mainRouter);

module.exports = app;
