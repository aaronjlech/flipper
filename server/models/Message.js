'use strict';
const mongoose = require('mongoose');
const likesSchema = require('./Like').likesSchema;

const messageSchema = new mongoose.Schema({
     userId: { type: String },
     createdAt: {type: Date, default: Date.now},
     updatedAt: {type: Date, default: Date.now},
     body: { type: String },
     likes: [likesSchema]
});


const Message = mongoose.model('Message', messageSchema);

module.exports = {
   Message,
   messageSchema
}
