const express = require('express')
const mongodb = require('mongodb')

module.exports = {
  getRooms(req, res) {
    // TODO: fetch from database
    //const posts = await loadRoomsCollection();
    //res.send(await posts.find({}).toArray());
    res.send({
      name: "World",
      icon: "how to send picture?",
      numberOfUsers: 234
    })
  }

  // TODO: add rooms

  // TODO: delete rooms
}

async function loadRoomsCollection() {
  const client = await mongodb.MongoClient.connect(
    'mongodb://YOUR_OWN_MONGODB',
    {
      useNewUrlParser: true
    }
  )

  return client.db('vue_express').collection('posts')
}