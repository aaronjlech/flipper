const User = require("../models").User;
const router = require("express").Router();
const { createToken, ensureAuthenticated } = require("../middlewares/jwt");
const hashPassword = require("../hashPassword.js").hashPassword;
const checkPassword = require("../hashPassword").checkPassword;

const controller = {
   createUser: (req, res, next) => {
      const { password } = req.body.user;
      User.findOne({ username: req.body.user.username }, (err, foundUser) => {
         if (foundUser) {
            return res.status(400).send("username already exists");
         } else {
            hashPassword(password, hash => {
               let userData = req.body.user;
               userData.password = hash;
               let user = new User(userData);
               user.save(function(err, newUser) {
                  if (err) {
                     return res.send(err);
                  } else {
                     console.log(req.body.user);
                     req.body.user = {
                        username: req.body.user.username,
                        password
                     };
                     return next();
                  }
               });
            });
         }
      });
   },
   sendDirectMessage: (req, res) => {},

   findAllUsers: (req, res) => {
      User.find((err, users) => {
         if (err) return res.send(err);

         const usersWithoutCurrent = users.filter(u => {
            return u._id.toString() !== req.user._id.toString();
         });
         res.send(usersWithoutCurrent);
      });
   },
   findOneUser: (req, res) => {
      const { id } = req.params;
      User.findById(id, (err, user) => {
         if (err) {
            res.status(500).send(err);
         } else {
         }
      });
   },
   loginUser: (req, res) => {
      // console.log(req.body.user)
      const { username, password } = req.body.user;
      User.findOne({ username }, "+password", (err, user) => {
         console.log(user);
         if (!user) {
            return res
               .status(401)
               .send({ message: "wrong username or password" });
         }
         if (err) {
            return res.status(500).send("");
         } else {

            checkPassword(password, user.password).then(isCorrect => {
               console.log(isCorrect);
               if (isCorrect) {
                  user.populate('friend_requests friends', (err, doc) => {
                     const {
                        messages,
                        likes,
                        display_name,
                        username,
                        friend_requests,
                        direct_messages,
                        friends,
                        _id,
                        gender,
                        sent_requests,
                        avatar_img
                     } = doc;     
                     let userInfo = {
                        messages,
                        likes,
                        display_name,
                        username,
                        friend_requests,
                        direct_messages,
                        friends,
                        sent_requests,
                        _id,
                        gender,
                        avatar_img
                     };
                     return res.send({ token: createToken(userInfo) });

                  })

               } else {
                  return res.status(400).send("wrong password or username");
               }
            });
         }
      });
   },
   logoutUser: (req, res) => {
      req.logout();
      res.redirect("/");
   },
   deleteUser: (req, res) => {
      const { id } = req.params;
      User.findByIdAndRemove(id, (err, User) => {
         if (err) {
            res.status(500).send(err);
         } else {
            res.send(User);
         }
      });
   },
   editUser: (req, res) => {
      const { id } = req.params;

      User.findById(id, (err, user) => {
         if (err) {
            res.status(500).send(err);
         } else {
            res.send(user);
         }
      });
   }
};

router.get("/", ensureAuthenticated, controller.findAllUsers);
router.get("/:id", ensureAuthenticated, controller.findOneUser);
router.put("/:id", ensureAuthenticated, controller.editUser);
router.post("/", controller.createUser, controller.loginUser);
router.post("/logout", ensureAuthenticated, controller.logoutUser);
router.post("/login", controller.loginUser);
router.delete("/remove/:id", ensureAuthenticated, controller.deleteUser);

module.exports = router;
