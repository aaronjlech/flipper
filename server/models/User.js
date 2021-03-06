'use strict';
const mongoose = require('mongoose');
const DmSchema = require('./DirectMessage').DmSchema;
function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

const userSchema = new mongoose.Schema({
   username: {type: String, required: true, unique: true},
   avatar_img: String,
   gender: {type: String, required: true},
   display_name: {type: String, required: true},
   password: {type: String, required: true, select: false},
   direct_messages: [DmSchema],
   friends: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
   messages: [{type: mongoose.Schema.Types.ObjectId, ref: "Message"}],
   friend_requests: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
   sent_requests: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
   likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }]
})
userSchema.pre('save', function(next){
   if(this.avatar_img) {
      return next()
   }
   switch (this.gender) {

      case 'male':
         let manImage = randomIntFromInterval(0, 90);
         this.avatar_img = `https://randomuser.me/api/portraits/men/${manImage}.jpg`
         break;

      case 'female':
         let womanImage = randomIntFromInterval(0, 50);
         this.avatar_img = `https://randomuser.me/api/portraits/women/${womanImage}.jpg`
         break;

      default:
         let legoImage = randomIntFromInterval(0, 8);
         this.avatar_img = `https://randomuser.me/api/portraits/lego/${legoImage}.jpg`
         break;
   }
   next();
})

const User = mongoose.model('User', userSchema);

module.exports = User;
