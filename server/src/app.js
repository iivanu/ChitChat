const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const passport = require('passport')
const keys = require('./config/keys')

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(passport.initialize())
app.use(passport.session())

require('./routes')(app)
require('./config/passport')(passport)
const server = require('http').Server(app)
const io = require('socket.io')(server)
require('./controllers/SocketController')(io)

const database = keys.mongoURI
mongoose
  .connect(
    database,
    { useNewUrlParser: true,
      useUnifiedTopology: true, }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log("Error connecting to database: " + err))

server.listen(keys.port, () => console.log(`Server started on port ${keys.port}`))


