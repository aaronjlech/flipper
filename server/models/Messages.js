'use strict';
const mongoose = require('mongoose');


const messageSchema = new mongoose.Schema({
     username: { type: String },
     body: { type: String }
     likes: [likesSchema]
});


const Messages = mongoose.model('Messages', messageSchema);



module.exports = {
   Messages,
   messageSchema
}
