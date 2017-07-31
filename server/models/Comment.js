'use strict'
const mongoose = require('mongoose')



const CommentSchema = new mongoose.Schema({
        creatorName: {type: String, required: true },
        createdAt: {type: Date, default: Date.now},
        updatedAt: {type: Date, default: Date.now},
        body: { type: String, required: true },
        likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
})
const Comment = mongoose.model('Comment', CommentSchema);

module.exports = {
   Comment,
   CommentSchema
}
