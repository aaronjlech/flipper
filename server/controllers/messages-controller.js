// const Messages = require('../models').Messages;
// const express = require('express');
// const router = express.Router();
//
//
//
//
// const controller = {
//    // message.user = user.id;
//    // message.text_body = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident dolore aut earum deleniti, numquam!';
//    // message.title = 'Im a title';
//    createMessage: async (req, res) => {
//       let userId = req.params.id;
//       let message = await Messages.create({
//             user: userId,
//             title: req.body.title,
//             text_body: req.body.text_body
//       })
//       res.json(message);
//    },
//    getAllMessages: async (req, res) => {
//       let messages = await Messages.findAll();
//
//       res.json(messages);
//    },
//    getSingleMessage: async (req, res) => {
//       let message = await Messages.findById(req.params.messageId)
//
//       res.json(message);
//    },
//    deleteMessage: async (req, res) => {
//
//    }
// }
// router.get('/', controller.getAllMessages);
// router.get('/:id', controller.getSingleMessage);
// router.post('/:id', controller.createMessage);
// router.delete('/:id', controller.deleteMessage);
//
// module.exports = router;
