const AuthenticationController = require('./controllers/AuthenticationController')
const ChatRoomController = require('./controllers/ChatRoomController')

module.exports = (app) => {
  app.post('/register', AuthenticationController.register)
  app.post('/login', AuthenticationController.login)

  app.get('/rooms', ChatRoomController.getRooms)
}