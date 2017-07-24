const Like = require('../models').Like;
const Message = require('../models').Message;
const User = require('../models').User;

const router = require('express').Router();


const controller = {
   createLike: (req, res) => {
      console.log("creating like")
      let likeData = {
         _messge: req.message._id,
         _creator: req.user._id
      }
      let like = new Like(likeData);
      like.save(function (err, newLike) {
         console.log(err, newLike);
         if (err) {
            res.send(err);
         } else {
            res.send(newLike);
         }
      });
   },
   findAllLikes: (req, res) => {
     Like.find((err, likes) => {
       if (err) {
         res.status(500).send(err)
       } else {
         res.send(likes)
       }
     })
   },
   findOneLike: (req, res) => {
     const { id } = req.params
     Like.findById(id, (err, like) => {
      if (err) {
         res.status(500).send(err)
      } else {
         res.send(like)
      }
     })
   },
   deleteLike: (req, res) => {
     const { id } = req.params
     Like.findByIdAndRemove(id, (err, like) => {
      res.send(like)
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

router.param('messageId', (req, res, next) => {
   Message.findById(req.params.messageId, (err, message) => {
      if(err) {
         return next(err);
      }
      if(!message) {
         err = new Error("User Not Found");
      } else {
         req.message = message;
         return next();
      }
   })
})

router.get('/', controller.findAllLikes);
router.get('/:id', controller.findOneLike);
router.post('/user/:userId/message/:messageId', controller.createLike);
router.delete('remove/:id', controller.deleteLike);


module.exports = router;
