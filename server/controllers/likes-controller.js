// const Likes = require('../models').Likes;
//
//
// const controller = {
//    // likes.message = message.id;
//    // likes.user = user.id;
//    createMessage: async (req, res) => {
//       let userId = req.params.id;
//       let like = await Likes.create({
//             user: userId,
//             title: req.body.title,
//             text_body: req.body.text_body
//       })
//       res.json(like);
//    },
//    getAllUserLikes: async (req, res) => {
//       let Likes = await Likes.findAll({
//          where: {
//             user
//          }
//       });
//
//       res.json(Likes);
//    },
//    getSingleMessage: async (req, res) => {
//       let message = await Likes.findById(req.params.messageId)
//
//       res.json(message);
//    },
//    deleteMessage: async (req, res) => {
//
//    }
// }
