module.exports = (io) => {
  io.on('connection', (socket) => {
    /* socket.on('connect', () => {
      // io.emit('connections', Object.keys(io.sockets.connected).length)
      console.log("A user connected")
    })

    socket.on('disconnect', () => {
      // io.emit('connections', Object.keys(io.sockets.connected).length)
      console.log("A user disconnected")
    }) */

    socket.on('sendMessage', (message) => {
      message.type = 1
      socket.broadcast.emit('newMessage', message)
    })

    socket.on('newUser', (user) => {
      socket.broadcast.emit('newUser', user)
    })
  })
}