const User = require('../models/User')

module.exports = {
  register(req, res) {
    const { username, email, password } = req.body;

    let errors = [];
    if (!username || !email || !password) {
      errors.push({ msg: 'Please enter all fields' });
    }
    if (password.length < 6) {
      errors.push({ msg: 'Password must be at least 6 characters' });
    }
    if (errors.length > 0) {
      return res.status(400).send({
        success: false,
        errors: errors
      })
    }

    // TODO: update database 
    User.findOne({ username: username }).then(user => {
      if (user) {
        errors.push({ msg: 'User already exists' });
        return res.status(400).send({
          success: false,
          errors: errors
        })
      }

      const newUser = new User({
        username,
        email,
        password
      })

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err
          newUser.password = hash
          newUser
            .save()
            .then(user => {
              req.status(200).send({
                success: true
              });
            })
            .catch(err => console.log(err))
        })
      })
    })


    res.send({
      message: 'Register',
      username,
      email,
      password
    })
  },


  login(req, res) {
    // TODO: add login with email option if username is not found
    const { username, password } = req.body

    let errors = []
    if (!username || !password) {
      errors.push({ msg: 'Please enter all fields' })
    }
    if (password.length < 6) {
      errors.push({ msg: 'Password must be at least 6 characters' })
    }
    if (errors.length > 0) {
      return res.status(400).send({
        success: false,
        errors: errors
      })
    }

    User.findOne({ username: username }).then(user => {
      if (!user) {
        errors.push({ msg: 'The login information is incorrect' });
        return res.status(403).send({
          success: false,
          errors: errors
        })
      }
      if (user.password !== password) {
        errors.push({ msg: 'The login information is incorrect' });
        return res.status(403).send({
          success: false,
          errors: errors
        })
      }
      // TODO: login user
    })


    res.send({
      message: 'Login as user',
      username,
      password
    })
  }
}
