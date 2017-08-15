const User = require('../models').User;
const router = require('express').Router();
const { createToken, ensureAuthenticated } = require('../middlewares/jwt')
const hashPassword = require("../hashPassword.js").hashPassword;
const checkPassword = require('../hashPassword').checkPassword;

const controller = {
   createUser: (req, res, next) => {
      const { password } = req.body.user
      User.findOne({ username: req.body.user.username}, (err, foundUser) => {
         if(foundUser) {
            return res.status(400).send('username already exists')
         } else {
            hashPassword(password, (hash) => {
               let userData = req.body.user;
               userData.password = hash;
               let user = new User(userData);
               user.save(function (err, newUser) {
                  if (err) {
                     res.send(err);
                  } else {
                     console.log(req.body.user)
                     req.body.user = {username: req.body.user.username, password}
                     return next()
                  }
               });
            })
         }
      })

   },
   sendDirectMessage: (req, res) => {

   },

   findAllUsers: (req, res) => {
      console.log('executing')
     User.find((err, users) => {
        if(err) return res.send(err)
        res.send(users)


     })

   },
   findOneUser: (req, res) => {
     const { id } = req.params
     User.findById(id, (err, user) => {
      if (err) {
         res.status(500).send(err)
      } else {

      }
     })
   },
   loginUser: (req, res) => {
      // console.log(req.body.user)
      const { username, password } = req.body.user;
      User.findOne({ username }, '+password', (err, user) => {
         // console.log(user);
         if(err){

            res.status(400).send('wrong password or username');
         } else {
            console.log('-------')
            // console.log(password, user.password);
            console.log('-------')

            checkPassword(password, user.password)
               .then(isCorrect => {
                  console.log(isCorrect);
                  if(isCorrect) {
                     const {
                        messages,
                        likes,
                        display_name,
                        username,
                        friend_requests,
                        direct_messages,
                        friends,
                        _id,
                        gender
                     } = user
                     let userInfo = {
                        messages,
                        likes,
                        display_name,
                        username,
                        friend_requests,
                        direct_messages,
                        friends,
                        _id,
                        gender
                     }
                     res.send({token: createToken(userInfo)})
                  }else {
                     res.status(400).send('wrong password or username');
                  }
               })
         }
      })
   },
   logoutUser: (req, res) => {
      req.logout();
      res.redirect('/');
   },
   deleteUser: (req, res) => {
     const { id } = req.params
     User.findByIdAndRemove(id, (err, User) => {
        if(err){
           res.status(500).send(err);
        } else {
           res.send(User)
        }
     })
  },
   editUser: (req, res) => {
      const { id } = req.params

      User.findById(id, (err, user) => {
         if(err){
            res.status(500).send(err);
         } else {
            res.send(user);
         }
      })
   }
}


router.get('/', ensureAuthenticated, controller.findAllUsers);
router.get('/:id', ensureAuthenticated, controller.findOneUser);
router.put('/:id', ensureAuthenticated, controller.editUser);
router.post('/', controller.createUser, controller.loginUser);
router.post('/login', controller.loginUser);
router.delete('/remove/:id', ensureAuthenticated, controller.deleteUser);


module.exports = router;
