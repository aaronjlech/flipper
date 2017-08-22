const Message = require('../models').Message;
const User = require('../models').User;
const { ensureAuthenticated } = require('../middlewares/jwt')
const router = require('express').Router();


const controller = {
   handleLike: (req, res) => {
      const { message, user } = req

      let userIndex = user.likes.indexOf(message._id);
      let messageIndex = message.likes.indexOf(user._id);

         if(userIndex > -1 && messageIndex > -1){
            message.likes.splice(messageIndex, 1)
            user.likes.splice(userIndex, 1)
            user.save();
            message.save((err, updatedMessage) => {
               if(err) return res.status(500).send(err)

               return res.send(updatedMessage);
            });
         } else {
            message.likes.push(user._id)
            user.likes.push(message._id)
            user.save();
            message.save((err, updatedMessage) => {
               if(err) return res.status(500).send(err)

               return res.send(updatedMessage);
            });
         }
   }

}

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
router.use(ensureAuthenticated)
router.put('/message/:messageId', controller.handleLike);


module.exports = router;
