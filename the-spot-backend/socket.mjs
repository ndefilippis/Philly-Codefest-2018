import socket from 'socket.io';
import express from 'express';

const app = express();
const io = socket(app);
socket.listen(3000);

io.on('connection', client => {
  console.log('Client connected');
  client.on('message', message => {
    io.sockets.emit('broadcast', message);
  });
});
