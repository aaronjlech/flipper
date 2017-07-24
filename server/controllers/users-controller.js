const User = require('../models').User;
const router = require('express').Router();
const hashPassword = require("../hashPassword.js").hashPassword;
const checkPassword = require('../hashPassword').checkPassword;

const controller = {
   createUser: (req, res) => {
      console.log(req.body);
      const { password } = req.body.user
      hashPassword(password, (hash) => {
         let userData = req.body.user;
         userData.password = hash;
         let user = new User(userData);
         user.save(function (err, newUser) {
            if (err) {
               res.send(err);
            } else {
               res.send(newUser);
            }
         });
      })
   },

   findAllUsers: (req, res) => {
     User.find((err, users) => {
       if (err) {
         res.status(500).send(err)
       } else {
         res.send(users)
       }
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
      const { username, password } = req.body.user;
      User.find({username}).then((err, user) => {
         if(err){
            res.status(500).send(err);
         } else {
            checkPassword(password, user.password)
               .then(isCorrect => {
                  if(isCorrect) {
                     res.send(user)
                  }
               })
         }
      })
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


router.get('/', controller.findAllUsers);
router.get('/:id', controller.findOneUser);
router.put('/:id', controller.editUser);
router.post('/', controller.createUser);
router.post('/login', controller.loginUser);
router.delete('remove/:id', controller.deleteUser);


module.exports = router;
