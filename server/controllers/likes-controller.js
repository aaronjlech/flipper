const Like = require('../models').Like;
const router = require('express').Router();


const controller = {
   createLike: (req, res) => {
      let like = new Like(req.body.like);
      like.save(function (err, newLike) {
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
     Mememinder.findById(id, (err, like) => {
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


router.get('/', controller.findAllLikes);
router.get('/:id', controller.findOneLike);
router.post('/', controller.createLike);
router.delete('remove/:id', controller.deleteLike);


module.exports = router;
