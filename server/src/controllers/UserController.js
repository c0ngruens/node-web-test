const jwt = require('jsonwebtoken')
const config = require('../config/config')

const signToken = user => {
  return jwt.sign({
    iss: config.app.name,
    sub: user,
    iat: new Date().getTime(),
    exp: Math.floor(Date.now() / 1000) + config.token.expires
  }, config.token.secret)
}

module.exports = {
  signUp: async (req, res, next) => {
    console.log('signUp controller called.')
    const { email, password } = req.body

    const token = signToken(email)

    res.send({
      tkn: token,
      pwd: password
    })
  },
  signIn: async (req, res, next) => {
    console.log('signIn controller called.')
  },
  secret: async (req, res, next) => {
    console.log('secret controller called.')
    res.send({
      message: `I'm here`
    })
  }
}
