'use strict';
const mongoose = require('mongoose');


const likesSchema = new mongoose.Schema({
   messageId: {type: String, required: true},
   userId: {type: String, required: true},
   username: {type: String, required: true}
})



const Likes = mongoose.model('Likes', likesSchema);


module.exports = {
   Likes,
   likesSchema
}
