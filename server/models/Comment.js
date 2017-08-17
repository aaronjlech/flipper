'use strict'
const mongoose = require('mongoose')



const CommentSchema = new mongoose.Schema({
        _creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        createdAt: {type: Date, default: Date.now},
        updatedAt: {type: Date, default: Date.now},
        body: { type: String, required: true },
})
const Comment = mongoose.model('Comment', CommentSchema);

module.exports = {
   Comment,
   CommentSchema
}
