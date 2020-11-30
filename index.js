const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mainRouter = require('./src/routes/index');
const cors = require('cors');
const app = express();
// inisialisasi port
const port = 8000;

// listen port
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});

app.use(cors());
// menambahkan logger
app.use(logger('dev'));

// menambahkan parser untuk x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// extended: false => menggunakan qs
// extended: true => menggunakan querystring

// menambahkan parser untuk raw json
app.use(bodyParser.json())

app.use('/', mainRouter);

module.exports = app;
