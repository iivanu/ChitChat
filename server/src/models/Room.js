const mongoose = require('mongoose')

const RoomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  capacity: {
    type: Number,
    default: 255
  },
  icon: {
    data: Buffer,
    contentType: String,
    required: false
  }
})

const Room = mongoose.model('User', RoomSchema)
module.exports = Room