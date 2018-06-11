const router = require('express-promise-router')()
const passport = require('passport')

require('../passport')
const UserController = require('../controllers/UserController')
const UserControllerPolicy = require('../policies/UserControllerPolicy')

router.route('/signup')
  .post(UserControllerPolicy.signUp, UserController.signUp)

router.route('/signin')
  .post(UserController.signIn)

router.route('/secret')
  .get(passport.authenticate('jwt', { session: false }), UserController.secret)

module.exports = router
