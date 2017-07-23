'use strict';
const mongoose = require('mongoose');


const likesSchema = new mongoose.Schema({
   messageId: {type: String, required: true},
   _creator: { type: Number, ref: 'User' },
   display_name: {type: String, required: true}
})



const Like = mongoose.model('Like', likesSchema);


module.exports = {
   Like,
   likesSchema
}
