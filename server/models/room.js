'use strict';
module.exports = function(sequelize, DataTypes) {
  var Room = sequelize.define('Room', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    number: {
      type: DataTypes.INTEGER
    },
    available: {
      type: DataTypes.BOOLEAN
    },
    capacity: {
      type: DataTypes.INTEGER
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Room;
};
