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

      const { username, password } = req.body.user;
      User.findOne({ username }, (err, user) => {
         if(err){

            res.status(500).send(err);
         } else {
            console.log(password);
            checkPassword(password, user.password)
               .then(isCorrect => {
                  console.log(isCorrect);
                  if(isCorrect) {
                     const { _id, username, avatar_img, gender, display_name, messages, likes} = user;
                     let userInfo = {
                        _id,
                        username,
                        avatar_img,
                        gender,
                        display_name,
                        messages,
                        likes
                     };

                     res.send(userInfo)
                  }else {
                     res.send('wrong password or username');
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
router.delete('/remove/:id', controller.deleteUser);


module.exports = router;
