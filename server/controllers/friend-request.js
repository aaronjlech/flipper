const User = require('../models').User;
const router = require('express').Router();



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
         res.send(updatedUser)
      });
   },
   acceptRequest: (req, res) => {
      const { friend, user } = req;
      console.log(user.sent_requests)
      let sentIndex = user.friend_requests.indexOf(friend._id);
      let friendIndex = friend.sent_requests.indexOf(user._id);
      console.log(sentIndex)
      if(sentIndex > -1) {
         user.friend_requests.splice(sentIndex, 1);

         user.friends.push(friend._id);
         user.save();
      } else {
         return res.status(500).send('user noot found');
      }
      if(friendIndex > -1) {
         friend.sent_requests.splice(friendIndex, 1);
         friend.friends.push(user._id);
         friend.save((err, updatedFriend) => {
            if(err) return res.status(500).send(err);

            return res.send('you are now friends!');
         })
      } else {
         return res.status(500).send('user not found');
      }

   },
   declineRequest: (req, res) => {
      req.user.friend_requests.findByIdAndRemove(req.params.requestId, (err, serverRes) => {
         if(err) res.status(500).send(err);
         res.send('request declined');
      })
   }
}
router.param('userId', (req, res, next) => {
   User.findById(req.params.userId, (err, user) => {
      if(err) {
         return next(err);
      }
      if(!user) {
         err = new Error("User Not Found");
      } else {
         req.user = user;
         return next();
      }
   })
})
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


router.put('/send/:userId/friend/:friendId', controller.sendRequest);
router.put('/accept/:userId/friend/:friendId', controller.acceptRequest);
router.delete('/decline/:userId/request/:requestId/', controller.declineRequest);



module.exports = router;
