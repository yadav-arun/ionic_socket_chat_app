let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

io.on('connection', (socket) => {

    socket.on('setName', (name) => {
        socket.name = name;
        io.emit('users', { user: name, event: 'joined' });
    });

    socket.on('disconnect', function () {
        io.emit('users', { user: socket.name, event: 'left' });
    });

    socket.on('message', (message) => {
        io.emit('newMessage', { text: message.text, from: socket.name, created: new Date() });
    });
});

var port = process.env.PORT || 3001;

http.listen(port, function () {
    console.log('listening in http://localhost:' + port);
});