const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const passport = require('passport')

const app = express()
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)
require('./config/passport')(passport)

const database = require('./config/keys').mongoURI
mongoose
  .connect(
    database,
    { useNewUrlParser: true,
      useUnifiedTopology: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server started on port ${port}`))