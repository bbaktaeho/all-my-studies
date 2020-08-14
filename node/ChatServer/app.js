const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages');
const { getCurrentUser, userJoin, getRoomUsers, userLeave } = require('./utils/users');
const server = http.createServer(app);
const io = socketio(server);
const bot = 'bbak 로봇';

// static file 제공
app.use(express.static(path.join(__dirname, 'public'))); // 현재경로/public/index.js

// Run when client connect
io.on('connection', (socket) => {
  socket.on('joinRoom', ({ username, room }) => {
    const user = userJoin(socket.id, username, room);
    socket.join(user.room);
    // Welcome current user
    socket.emit('message', formatMessage(bot, '환영합니당'));
    // Broadcast when a user connects 'A user has joined the chat'
    // socket.broadcast.emit('message', formatMessage(bot, '새로운 유저가 참가했습니다'));
    socket.broadcast.to(user.room).emit('message', formatMessage(bot, `${user.username}님이 참가했습니다`));
    // Send users and room info
    io.to(user.room).emit('roomUsers', { room: user.room, users: getRoomUsers(user.room) });
  });

  // Listen for chatMessage
  socket.on('chatMessage', (msg) => {
    const user = getCurrentUser(socket.id);
    io.to(user.room).emit('message', formatMessage(user.username, msg));
  });
  // Runs when client disconnects 'A user has left the chat'
  socket.on('disconnect', () => {
    const user = userLeave(socket.id);
    if (user) {
      io.to(user.room).emit('message', formatMessage(bot, `${user.username}님이 나갔습니다`));
      // Send users and room info
      io.to(user.room).emit('roomUsers', { room: user.room, users: getRoomUsers(user.room) });
    }
  });
});

const PORT = 9000 || process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
