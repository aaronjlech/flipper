'use strict';
module.exports = function(sequelize, DataTypes) {
  var Messages = sequelize.define('Messages', {
    title: DataTypes.STRING,
    text_body: DataTypes.STRING,
    user: DataTypes.STRING
  },
      this.associate = function(models) {
        // associations can be defined here
      }
  });
  return Messages;
};
var findGreenStuff = 'green stuff';
