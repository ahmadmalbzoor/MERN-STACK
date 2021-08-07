const express = require('express');
const cors = require('cors');
const app = express();
const { Socket } = require('socket.io');

require('./server/config/mongoose.config');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = app.listen(8000, () =>
    console.log('The server is all fired up on port 8000')
);

const io = require('socket.io')(server, { cors: true });

io.on("connection", socket => {
    console.log(socket.id);
    console.log("Nice to meet you. (shake hand)");
    socket.emit("Welcome Home Client", "data");

});