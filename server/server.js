// server.js (Express.js with Socket.IO)
const express = require('express');
const http = require('http');
const io = require('socket.io')(http, {
    cors: {
        origins: ['http://localhost:4200']
    }
});
const cors = require('cors');

const app = express();
const server = http.createServer(app);

app.use(cors());

io.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('message', (message) => {
    console.log(`Received message: ${message}`);
    io.emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});