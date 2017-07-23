const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
   hashPassword: (password, saveUser) => {
      bcrypt.genSalt(saltRounds, function(err, salt) {
          bcrypt.hash(password, salt, function(err, hash) {
             saveUser(hash);
          });
      });
   },
   checkPassword: (password, hash) => {
      return bcrypt.compare(password, hash, (err, res) => {
         return res;
      })
   }
}
