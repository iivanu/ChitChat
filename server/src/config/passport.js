const User = require('../models/User')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const keys = require('./keys')

module.exports = function (passport) {
  passport.use(
    new JwtStrategy({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: keys.authentication.jwtSecret
    }, async function (jwtPayload, done) {
      try {
        const user = await User.findOne({
          where: {
            id: jwtPayload.id
          }
        })
        if (!user) {
          return done(new Error(), false)
        }
        return done(null, user)
      } catch (err) {
        return done(new Error(), false)
      }
    })
  )
}