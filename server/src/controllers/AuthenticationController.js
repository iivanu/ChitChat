const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const keys = require('../config/keys')

function jwtSignUser(user) {
  const THREE_HOURS = 60 * 60 * 3
  return jwt.sign(user, keys.authentication.jwtSecret, {
    expiresIn: THREE_HOURS
  })
}

User.prototype.comparePassword = function (password) {
  return bcrypt.compare(password, this.password)
}

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

    User.findOne({$or: [{ username: username }, { email: email }]}).then(user => {
      if (user) {
        if (user.email === email && user.username === username) {
          return res.status(400).send({ error: 'Username and email already exist' })
        } else if (user.email === email) {
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
          newUser.save().then(() => {
            res.send({
              user: newUser,
              token: jwtSignUser(newUser.toJSON())
            })
          }).catch(err => res.status(500).send({ error: 'Saving ' + err }))
        })
      })
    }).catch(err => res.status(500).send({ error: 'Finding ' + err }))
  },

  login(req, res) {
    const { username, password, guest } = req.body
    if (guest) {
      loginAsGuest(username, res)
      return
    }

    if (!username || !password) {
      return res.status(400).send({ error: 'Please enter username and password' })
    }
    if (password.length < 6) {
      return res.status(400).send({ error: 'Password must be at least 6 characters' })
    }

    User.findOne({$or: [{ username: username }, { email: email }]}).then(user => {
      if (!user || user.guest == true) {
        return res.status(403).send({ error: 'The login information is incorrect' })
      }
      user.comparePassword(password).then(isValid => {
        if (!isValid) {
          return res.status(403).send({ error: 'The login information is incorrect' })
        }
        res.send({
          user,
          token: jwtSignUser(user.toJSON())
        })
      }).catch(err => res.status(500).send({ error: 'Comparing password ' + err }))
    }).catch(err => res.status(500).send({ error: 'Finding ' + err }))
  }
}

function loginAsGuest(username, res) {
  if (!username) {
    return res.status(400).send({ error: 'Username not entered' })
  }
  User.findOne({ username: username }).then(user => {
    if (user) {
        return res.status(400).send({ error: 'Username already exists' })
    }
    const newUser = new User({
      username
    })
    newUser.save().then(() => {
      res.send({
        user: newUser,
        token: jwtSignUser(newUser.toJSON())
      })
    }).catch(err => res.status(500).send({ error: 'Saving ' + err }))
  }).catch(err => res.status(500).send({ error: 'Finding ' + err }))
}
