const express = require('express')
const mongodb = require('mongodb')

const router = express.Router()

// Get Rooms
router.get('/api/rooms', async (req, res) => {
  //const posts = await loadRoomsCollection();
  //res.send(await posts.find({}).toArray());
  res.send({
    name: "first room",
    icon: "first icon"
  })
});

// Add Rooms

// Delete Rooms


async function loadRoomsCollection() {
  const client = await mongodb.MongoClient.connect(
    'mongodb://YOUR_OWN_MONGODB',
    {
      useNewUrlParser: true
    }
  )

  return client.db('vue_express').collection('posts')
}

module.exports = router