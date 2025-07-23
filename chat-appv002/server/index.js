const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
app.use(cors());

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

let users = {}; // username => socket.id
let userList = []
io.on('connection', (socket) => {
  console.log('New connection socket.id:', socket.id);

  socket.on('register', (username) => {
    let tempObj = {
      socketId: socket.id,
      username
    }
   console.log('userList :: ', userList)
    userList = [...userList, tempObj]
    users[username] = socket.id;
    console.log(users, userList)//{ Rahul: 'Jx4jV3mDJ5-RhDKHAAAR' }
    console.log(`${username} registered with socket ID ${socket.id}`);

    // Broadcast updated user list to all clients
    io.emit('userList', userList);
  });

  socket.on('private_message', ({ sender, receiver, message }) => {
    const receiverSocketId = users[receiver];
    if (receiverSocketId) {
      io.to(receiverSocketId).emit('private_message', {
        sender,
        message
      });
    }
  });

  socket.on('disconnect', () => {
    console.log('users userList' , users, userList)
    for (let username in users) {
      if (users[username] === socket.id) {
        delete users[username];
        break;
      }
    }
    for(let i = 0; i < userList.length; i++) {
      if (userList[i].socketId === socket.id) {
        userList.splice(i, 1);
        break
      }
    }
    io.emit('userList', userList);
    console.log('User disconnected:', socket.id);
  });
});

server.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
