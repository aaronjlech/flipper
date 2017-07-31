'use strict'
const mongoose = require('mongoose')

const DmSchema = new mongoose.Schema({
        creatorName: {type: String, required: true },
        createdAt: {type: Date, default: Date.now},
        updatedAt: {type: Date, default: Date.now},
        body: { type: String, required: true }
})

const DirectMessage = mongoose.model('DirectMessage', DmSchema);

module.exports = {
   DmSchema,
   DirectMessage
}
