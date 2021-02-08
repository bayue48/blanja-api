require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const app = express();
const port = 8000;
const http = require('http')
const socketio = require("socket.io")
const server = http.createServer(app)
const bodyParser = require('body-parser');
const cors = require('cors');
const io = socketio(server);
// cors => cross origin resource sharing
const mainRouter = require('./src/routes/index');

// port initializtion
// listen port
server.listen(port, () => {
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

io.on("connection", (socket) => {
    console.log("a user connected :D");
    socket.on("chat message", (msg) => {
      console.log(msg);
      io.emit("chat message", msg);
    });
  });
  
  

module.exports = app;
