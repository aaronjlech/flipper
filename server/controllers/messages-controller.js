const Message = require('../models').Message;
const User = require('../models').User;
const router = require('express').Router();


const controller = {
   createMessage: (req, res) => {
      let message = new Message(req.body.message);
      message.save(function (err, newMessage) {
         if (err) {
            res.send(err);
         } else {
            res.send(newMessage);
         }
      });
   },
   findAllMessages: (req, res) => {
     Message.find((err, messages) => {
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
router.param('userId', (req, res) => {
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

router.get('/:userId', controller.findMessagesByUser);
router.get('/:userId/edit/:messageId', controller.editMessage);
router.get('/', controller.findAllMessages);
router.get('/:messageId', controller.findOneMessage);
router.post('/create/:userId', controller.createMessage);
router.delete('remove/:id', controller.deleteMessage);


module.exports = router;
