import socket from 'socket.io';
import express from 'express';

const app = express();
const io = socket(app);
socket.listen(3000);
