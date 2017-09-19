const AuthenticationController = require('./controllers/AuthenticationController')
const AutthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')

module.exports = (app) => {
  app.post('/register',
    AutthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)

  app.get('/songs',
    SongsController.index)
}
