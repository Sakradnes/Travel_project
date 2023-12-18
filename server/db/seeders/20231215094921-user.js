'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {},

  async down(queryInterface, Sequelize) {
    await user.bulckCreate([
      {
        name: 'Alex',
        email: 'alex@mail.ru',
        password: '123',
        role: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ivan',
        email: 'ivan@mail.ru',
        password: '123',
        role: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ilya',
        email: 'ilya@mail.ru',
        password: '123',
        role: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
};
