'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      username: 'Vicky',
      password: 'dada',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'Iliya',
      password: 'nene',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'Nikolay',
      password: '456',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'Jaki',
      password: '123',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
