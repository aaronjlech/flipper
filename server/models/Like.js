'use strict';
const mongoose = require('mongoose');


const likesSchema = new mongoose.Schema({
   createdAt: { type: Date, default: Date.now()},
   _message: { type: mongoose.Schema.Types.ObjectId, ref: 'Message' },
   _creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

const Like = mongoose.model('Like', likesSchema);


module.exports = {
   Like,
   likesSchema
}
