const jwt = require('jsonwebtoken')
const TOKEN_SECRET = require('./secrets')
const moment = require('moment')
const User = require('../models').User
function createToken (user) {
  const payload = {
    sub: user._id,
    user,
    iat: moment().unix(),
    exp: moment().add(1, 'day').unix()
  }
  return jwt.sign(payload, TOKEN_SECRET)
}

function ensureAuthenticated (req, res, next) {
   console.log(req.headers.authorization, 'this user')
  if (!req.headers.authorization) {
    return res
      .status(401)
      .send({
        message: 'Please make sure your request has an authorization header'
      })
  }
  const token = req.headers.authorization.split(' ')[1]
  var payload = jwt.verify(token, TOKEN_SECRET)
  if (payload.exp <= moment().unix()) {
    return res.status(401).send({ message: 'Token has expired' })
  }
  console.log(payload.user._id)
  User.findById(payload.user._id, (err, currentUser) => {
     req.user = currentUser
     return next()
 })
}

module.exports = { createToken, ensureAuthenticated }
