const jwt = require('jsonwebtoken');
const secret = require('./secrets');


function ensureAuthenticated(req , res, next){

   if(!req.headers.authorization) {
      return res.status(401).send({message: 'Not authorized'})
   }
   const token = req.headers.authorization.split(' ')[1]
   if(!token) {
      return res.status(401).send({message: 'not authorized'})

   }
   const decoded = jwt.verify(token, secret)
   req.user = decoded
   next();

}


function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated()){
      return next();
   }else {
      res.redirect('/');
   }

    // if they aren't redirect them to the home page
}

module.exports = {
   isLoggedIn,
   ensureAuthenticated
}
