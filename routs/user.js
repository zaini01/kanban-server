const rout = require('express').Router()
const user = require('../controllers/user')

rout.post('/register',user.register)
rout.post('/login',user.login)
rout.post('/oauth',user.oAuthGoogle)
module.exports = rout