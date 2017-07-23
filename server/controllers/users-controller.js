const User = require('../models');
const router = require('express').Router();
const hashPassword = require("../hashPassword.js").hashPassword;


const controller = {
   createUser: (req, res) => {
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
     User.find((err, Users) => {
       if (err) {
         res.status(500).send(err)
       } else {
         res.send(Users)
       }
     })
   },
   findOneUser: (req, res) => {
     const { id } = req.params
     Mememinder.findById(id, (err, User) => {
      if (err) {
         res.status(500).send(err)
      } else {
         res.send(User)
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
router.delete('remove/:id', controller.deleteUser);


module.exports = router;
