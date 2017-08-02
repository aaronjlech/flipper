function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated()){
      return next();
   }else {
      res.redirect('/');
   }

    // if they aren't redirect them to the home page
}

module.exports = isLoggedIn
