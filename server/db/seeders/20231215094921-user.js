const bcrypt = require('bcrypt');

('use strict');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Alex',
        email: 'alex@mail.ru',
        avatar: '/img/2070691.png',
        password: await bcrypt.hash('12345678', 10),
        isAdmin: true,
        
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ivan',
        email: 'ivan@mail.ru',
        avatar: '/img/2070691.png',
        password: await bcrypt.hash('12345678', 10),
        isAdmin: false,
        
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ilya',
        email: 'ilya@mail.ru',
        avatar: '/img/2070691.png',
        password: await bcrypt.hash('12345678', 10),
        isAdmin: true,
        
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
