const path = require('path');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const socket_io = require('socket.io')(server);
app.use(express.static(__dirname));
app.get('*',function (req,res) {
    res.sendFile(path.join(__dirname,'/index.html'));
});
server.listen(3000, function () {
   console.log(`listen to 3000`);
});
socket_io.on('connection',function (socket) {
   socket.on('login', (msg) => {
       const {username} = msg;
       socket.emit('login success',{name:username, login: true});
   });
});
