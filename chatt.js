
var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');


var server = http.createServer(function (request, response) {
  // HTMLPage.html
  fs.readFile('chatting.html', function (error, data) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(data);
  });
}).listen(52273, function () {
  console.log('Server Running at http://127.0.0.1:52273');
});


var io = socketio.listen(server);
io.sockets.on('connection', function (socket) {
  
  socket.on('message', function (data) { //메시지를 받고
  
    io.sockets.emit('message', data); // 모든 접속자에게 메시지 보냄. public
  });
});