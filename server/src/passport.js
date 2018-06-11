const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const { ExtractJwt } = require('passport-jwt')
const LocalStrategy = require('passport-local')

const { token } = require('./config/config')

passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromHeader('auth'),
  secretOrKey: token.secret
}, async (payload, done) => {
  try {
    /**
     * get user from database and compare
     */
    if (payload.sub !== 'vlada.ramone@gmail.com') {
      done(null, false)
    }
    done(null, payload.sub)
  } catch (error) {
    done(error, false)
  }
}))

passport.use(new LocalStrategy({
  usernameField: 'email'
}, async (email, password, done) => {
  
}))
