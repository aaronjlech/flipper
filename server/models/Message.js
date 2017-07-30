'use strict';
const mongoose = require('mongoose');
const likesSchema = require('./Like').likesSchema;

const messageSchema = new mongoose.Schema({
     _creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
     createdAt: {type: Date, default: Date.now},
     updatedAt: {type: Date, default: Date.now},
     body: { type: String, required: true },
     likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Like' }],
     comments: []
});


const Message = mongoose.model('Message', messageSchema);

module.exports = {
   Message,
   messageSchema
}
