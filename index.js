require("dotenv").config();

const express = require("express");
const logger = require("morgan");
const app = express();
const port = 8000;
const http = require("http");
const socketio = require("socket.io");
const server = http.createServer(app);
const bodyParser = require("body-parser");
const cors = require("cors");
const io = socketio(server).sockets;
// cors => cross origin resource sharing
const mainRouter = require("./src/routes/index");

global.io = io;

io.on("connection", (socket) => {
  const id = socket.handshake.query.user_id;
  console.log("a user connected ...",id, socket.id);
  socket.join(id);
  socket.on("chat message", (msg, id_recipient) => {
    console.log(`=====================`)
    console.log('sender'+msg.sender);
    console.log('penerima '+id_recipient);
    console.log('id handshake'+id)
    console.log(msg)
    io.to(id_recipient).to(id).emit("chat message", msg);
  });
  socket.on('fromBuyer', msgEvent =>{
	  socket.emit('fromBuyer',msgEvent);
  });
  socket.on('fromSeller', msgEvent =>{
	  socket.emit('fromSeller',msgEvent);
  });
});

// listen port
server.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});

app.use(express.static("public"));
// allow access from all origin
app.use(cors());
// logger
app.use(logger("dev"));

// parser for x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// extended: false => use qs
// extended: true => use querystring

// parser for raw json
app.use(bodyParser.json());

app.use("/", mainRouter);

// io.on("connection", (socket) => {
//   console.log("a user connected :D");
//   socket.on("chat message", (msg) => {
//     console.log(msg);
//     io.emit("chat message", msg);
//   });
// });

module.exports = app;
