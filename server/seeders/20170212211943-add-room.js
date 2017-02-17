'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Rooms', [{
      number: 200,
      available: true,
      capacity: 200,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      number: 325,
      available: false,
      capacity: 150,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      number: 100,
      available: true,
      capacity: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      number: 500,
      available: false,
      capacity: 48,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Rooms', null, {});
  }
};
