module.exports = {
  signUp: async (req, res, next) => {
    console.log('signUp controller called.')
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
