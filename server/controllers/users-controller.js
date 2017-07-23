// const User = require('../models').Users;
// const express = require('express');
//
// const router = express.Router();
// // user.username = 'username@mail.com';
// // user.display_name = 'Billy';
// // user.password = 'imacoolperson1';
// const controller = {
//    createUser: async (req, res) => {
//       let user = await User.create({
//             name: req.body.username,
//             display_name: req.body.display_name,
//             password: req.body.password
//       })
//       res.json( {
//          username: user.username,
//          display_name: user.display_name,
//          password: user.password
//       })
//    },
//    getAllUsers: async (req, res) => {
//       let users = await User.findAll();
//
//       res.json(users);
//    },
//    getSingleUser: async (req, res) => {
//       let user = await User.findById(req.params.userId)
//
//       res.json(user);
//    },
//    loginUser: async (req, res) => {
//       let user = await User.findById(req.params.userId);
//       if(user){
//          res.json(user)
//       }else{
//          res.send("you're not a user!");
//       }
//    },
//    logoutUser: (req, res) => {
//       req.session.destroy();
//       res.status(200);
//    }
// }
//
//
//
// router.get('/', controller.getAllUsers);
// router.get('/:id', controller.getSingleUser);
//
// router.post('/', controller.createUser);
// router.post('/login', controller.loginUser);
// router.post("/logout", controller.logoutUser);
//
//
// module.exports = router;
