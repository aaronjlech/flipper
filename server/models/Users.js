'use strict';
const mongoose = require('mongoose');
const messageSchema = require('Messages').messageSchema;
const likesSchema = require('Likes').likesSchema;
const userSchema = new mongoose.Schema({

   username: {type: String, required: true},
   avatar_img: {type: String, required: true},
   gender: {type: String, required: true}
   display_name: {type: String, required: true},
   password: {type: String, required: true},
   messages: [messageSchema]
   likes: [likesSchema]
})


const Users = mongoose.model('Users', userSchema);

module.exports = Users;
