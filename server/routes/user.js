const UserController = require('../controllers/user')
const router = require('express-promise-router')()

router.route('/signup')
  .post(UserController.signUp)

router.route('/signin')
  .post(UserController.signIn)

router.get('/secret')
  .get(UserController.secret)

module.exports = router
