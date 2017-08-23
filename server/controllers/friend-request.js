const User = require('../models').User;
const { ensureAuthenticated } = require('../middlewares/jwt')
const router = require('express').Router();
const { createToken } = require("../middlewares/jwt");

const controller = {
   sendRequest: (req, res) => {
      const { friend, user } = req;

      user.sent_requests.push(friend._id);
      friend.friend_requests.push(user._id);
      friend.save((err, updatedUser) => {

         if (err) res.status(500).send(err);
      })
      user.save((err, updatedUser) => {
         if (err) res.status(500).send(err);
         updatedUser.populate('friends friend_requests', (err, withFriends) => {
            res.send(withFriends)
         })
      });
   },
   acceptRequest: (req, res) => {
      const { friend, user } = req;
      let sentIndex = user.friend_requests.indexOf(friend._id);
      let friendIndex = friend.sent_requests.indexOf(user._id);
      if(sentIndex > -1 && friendIndex > -1) {
         friend.sent_requests.splice(friendIndex, 1);
         friend.friends.push(user._id);
         friend.save((err, updatedFriend) =>{
            if(err) return res.status(500).send(err)
         });
         user.friend_requests.splice(sentIndex, 1);
         user.friends.push(friend._id);
         user.save((err, updatedUser) => {
            if (err) res.status(500).send(err);
            updatedUser.populate('friends friend_requests', (err, withFriends) => {
               res.send(withFriends)
            })
         });
      } else {
         return res.status(500).send('user noot found');
      }

   },
   declineRequest: (req, res) => {
      req.user.friend_requests.splice(req.params.requestId, 1)
      user.save((err, updatedUser) => {
         if (err) res.status(500).send(err);
         updatedUser.populate('friends friend_requests', (err, withFriends) => {
            res.send(withFriends)
         })
      });

   }
}

router.param('friendId', (req, res, next) => {
   User.findById(req.params.friendId, (err, friend) => {
      if(err) {
         return next(err);
      }
      if(!friend) {
         err = new Error("User Not Found");
      } else {
         req.friend = friend;
         return next();
      }
   })
})

router.use(ensureAuthenticated)
router.put('/send/:friendId', controller.sendRequest);
router.put('/accept/friend/:friendId', controller.acceptRequest);
router.put('/decline/request/:requestId/', controller.declineRequest);

module.exports = router;
