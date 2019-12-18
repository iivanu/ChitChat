const bcrypt = require('bcryptjs');
const passport = require('passport');

const User = require('../models/User')

module.exports = {
  register(req, res) {
    const { username, email, password, password2 } = req.body
  
    if (!username || !email || !password || !password2) {
      return res.status(400).send({ error: 'Please enter all fields' })
    }
    if (password.length < 6) {
      return res.status(400).send({ error: 'Password must be at least 6 characters' })
    }
    if (password != password2) {
      return res.status(400).send({ error: 'Passwords do not match' })
    }
  
    User.findOne({$or: [{ username: username }, { email: email }]})
      .then(user => {
        if (user) {
          if (user.email === email) {
            return res.status(400).send({ error: 'Email already exists' })
          } else {
            return res.status(400).send({ error: 'Username already exists' })
          }
        }
  
        const newUser = new User({
          username,
          email,
          password,
          guest: false
        })
  
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err
            newUser.password = hash
            newUser.save()
              .then(user => {
                res.status(200).send({
                  user: newUser,
                  token: "json token TODO"
                });
              })
              .catch(err => console.log("DATABASE SAVING ERROR: " + err))
          })
        })
      })
      .catch(err => console.log("DATABASE FIND ERROR: " + err))
  },

  // TODO: see which strategy to use (local vs jwt)
  login(req, res) {
    const { username, password } = req.body

    if (!username || !password) {
      return res.status(400).send({ error: 'Please enter all fields' })
    }
    if (password.length < 6) {
      return res.status(400).send({ error: 'Password must be at least 6 characters' })
    }

    User.findOne({$or: [{ username: username }, { email: email }]}).then(user => {
      if (!user) {
        return res.status(403).send({ error: 'The login information is incorrect' })
      }
      if (user.password !== password) {
        return res.status(403).send({ error: 'The login information is incorrect' })
      }
      // TODO: login user
    })
  }

  // TODO: add login as guest
}
