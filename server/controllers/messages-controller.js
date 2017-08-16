const Message = require('../models').Message;
const User = require('../models').User;
const { ensureAuthenticated } = require('../middlewares/jwt')
const router = require('express').Router();


const controller = {
   createMessage: (req, res) => {
      let messageData = {
         body: req.body.message
      };
      messageData._creator = req.user._id;
      let message = new Message(messageData);
      message.save(function (err, newMessage) {
         if (err) {
            res.send(err);
         } else {
            res.send(newMessage);
         }
      });
   },
   createComment: (req, res) => {
      let commentData = req.body.comment;
      req.message.comments.push(commentData)
      req.message.save((err, updatedMessage) => {
         if(err) {
            res.send(err);
         } else {
            res.send(updatedMessage);
         }
      })
   },
   findAllMessages: (req, res) => {
     Message.find()
        .populate('likes _creator')
        .exec((err, messages) => {
           console.log(messages);
         //   messages.likes.populate('_creator')
          if (err) {
            res.status(500).send(err)
          } else {
            res.send(messages)
          }
       })
   },
   findMessagesByUser: (req, res) => {
      res.send(req.user.messages);
   },
   deleteMessage: (req, res) => {
     const { id } = req.params
     Message.findByIdAndRemove(id, (err, message) => {
        res.send(message)
     })
   }
}

router.param('messageId', (req, res, next) => {
   User.findById(req.params.messageId, (err, message) => {
      if(err) {
         return next(err);
      }
      if(!message) {
         err = new Error("Message Not Found");
      } else {
         req.message = message;
         return next();
      }
   })
})
router.use(ensureAuthenticated)
router.get('/:userId', controller.findMessagesByUser);
// router.get('/:userId/messages/:messageId', controller.editMessage);
router.get('/', controller.findAllMessages);
// router.get('/:messageId', controller.findOneMessage);
router.post('/create', controller.createMessage);
router.put('/comments/create/:messageId', controller.createComment)
router.delete('/remove/:id', controller.deleteMessage);


module.exports = router;
